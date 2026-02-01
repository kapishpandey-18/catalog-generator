import asyncio
from pyppeteer import launch

async def print_pdf():
    # Try launching with --no-sandbox for Mac compatibility
    browser = await launch(
        args=['--no-sandbox'],
        # Uncomment the following line and set the path if you have Chrome installed elsewhere (e.g., on Apple Silicon):
        # executablePath='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    )
    page = await browser.newPage()
    # Change the URL below if your app runs on a different port
    await page.goto('http://localhost:5173', {'waitUntil': 'networkidle2'})
    await page.pdf({
        'path': 'catalogue.pdf',
        'format': 'A4',
        'printBackground': True
    })
    await browser.close()

if __name__ == '__main__':
    asyncio.run(print_pdf())
