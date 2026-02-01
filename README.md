# Salon Catalog

This is a code bundle for Salon Catalog. The original project is available at https://www.figma.com/design/ty9ExpbasPwDzKJrX0k9Ai/Salon-Catalog.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

---

## Print / Export Catalogue as PDF

### Quick Steps

1. Open your browser and navigate to http://localhost:5173/ (or the port shown in terminal)
2. Click the **"Print / Save PDF"** button at the top right corner
3. In the browser print dialog:
   - **Destination**: Select "Save as PDF"
   - **Pages**: All
   - **Layout**: Portrait
   - **More settings** → Enable **"Background graphics"** (required for colors)
   - **Margins**: None (the pages have built-in 18mm margins)
4. Click **Save**

### Print Structure

The catalogue is structured for perfect A4 print output:

- **Cover Page**: Brand introduction with logo and tagline
- **Category Dividers**: Full-page section headers (HAIR, SKIN, MAKEUP, NAILS)
- **Service Pages**: Each sub-section (e.g., "Hair Treatments", "Waxing") starts on a new page
  - If a sub-section has many services, it continues to the next page with the title repeated
  - Services are displayed in two columns for efficient space usage
  - No service row will split across pages

### Technical Notes

- Page size: A4 (210mm × 297mm)
- Margins: 18mm on all sides
- Colors and backgrounds are preserved in print
- All UI elements (buttons, instructions) are automatically hidden in print mode
