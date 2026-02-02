/**
 * CATALOGUE GENERATOR
 *
 * This script generates the final PDF catalogue:
 * 1. Starts the dev server
 * 2. Captures each page as JPEG
 * 3. Combines images into a PDF
 *
 * Usage: npm run generate
 */

const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'catalogue-images');
const OUTPUT_PDF = path.join(__dirname, 'catalogue.pdf');
const DEV_SERVER_URL = 'http://localhost:5173';

// Clean and create images directory
function setupDirectories() {
  if (fs.existsSync(IMAGES_DIR)) {
    fs.rmSync(IMAGES_DIR, { recursive: true });
  }
  fs.mkdirSync(IMAGES_DIR);
}

// Wait for dev server to be ready
async function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  throw new Error('Dev server timeout');
}

// Capture pages as JPEG images
async function capturePages(browser) {
  const page = await browser.newPage();

  await page.setViewport({
    width: 794,
    height: 1123,
    deviceScaleFactor: 2
  });

  console.log('Loading catalogue...');
  await page.goto(DEV_SERVER_URL, {
    waitUntil: 'networkidle0',
    timeout: 60000
  });

  await page.waitForSelector('.catalogue', { timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const pages = await page.$$('.page');
  console.log(`Found ${pages.length} pages\n`);

  const imageFiles = [];
  for (let i = 0; i < pages.length; i++) {
    const filename = `page-${String(i + 1).padStart(2, '0')}.jpg`;
    const filepath = path.join(IMAGES_DIR, filename);

    await pages[i].screenshot({
      path: filepath,
      type: 'jpeg',
      quality: 90
    });

    imageFiles.push(filepath);
    console.log(`  ✓ ${filename}`);
  }

  return imageFiles;
}

// Combine images into PDF
async function createPDF(imageFiles) {
  console.log('\nCreating PDF...');

  const pdfDoc = await PDFDocument.create();
  const pageWidth = 595.28;  // A4 width in points
  const pageHeight = 841.89; // A4 height in points

  for (const imagePath of imageFiles) {
    const imageBytes = fs.readFileSync(imagePath);
    const image = await pdfDoc.embedJpg(imageBytes);
    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PDF, pdfBytes);

  const sizeMB = (pdfBytes.length / 1024 / 1024).toFixed(1);
  console.log(`  ✓ catalogue.pdf (${sizeMB} MB)`);
}

// Main function
async function generate() {
  console.log('═══════════════════════════════════════');
  console.log('       CATALOGUE GENERATOR');
  console.log('═══════════════════════════════════════\n');

  setupDirectories();

  // Check if dev server is running
  let serverProcess = null;
  try {
    await fetch(DEV_SERVER_URL);
    console.log('Dev server already running\n');
  } catch {
    console.log('Starting dev server...');
    serverProcess = spawn('npm', ['run', 'dev'], {
      cwd: __dirname,
      stdio: 'ignore',
      detached: true
    });
    await waitForServer(DEV_SERVER_URL);
    console.log('Dev server ready\n');
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const imageFiles = await capturePages(browser);
    await createPDF(imageFiles);

    console.log('\n═══════════════════════════════════════');
    console.log('  ✓ Catalogue generated successfully!');
    console.log('═══════════════════════════════════════\n');
    console.log('Files:');
    console.log(`  • Images: ./catalogue-images/`);
    console.log(`  • PDF:    ./catalogue.pdf\n`);

  } finally {
    await browser.close();
    if (serverProcess) {
      process.kill(-serverProcess.pid);
    }
  }
}

generate().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
