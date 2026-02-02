# Salon Catalogue Generator

A printable service catalogue generator for salons. Edit service data and generate a professional PDF catalogue.

## Quick Start

```bash
# Install dependencies
npm install

# Generate catalogue PDF
npm run generate
```

## Workflow

```
┌─────────────────────┐
│  catalogueData.ts   │  ← Edit services, prices, categories
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    npm run dev      │  ← Preview in browser (localhost:5173)
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   npm run generate  │  ← Generate images + PDF
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   catalogue.pdf     │  ← Final output (ready to print/share)
└─────────────────────┘
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── data/
│   │   │   └── catalogueData.ts    ← SERVICE DATA (edit this!)
│   │   └── components/
│   │       └── PrintableCatalogue.tsx
│   └── styles/
│       ├── catalogue.css           ← Main styles
│       └── print.css               ← Print styles
├── public/
│   └── bbs-logo-bg.png             ← Logo image
├── catalogue-images/               ← Generated page images
├── catalogue.pdf                   ← Final PDF output
└── generate-catalogue.cjs          ← Generation script
```

## How to Edit Services

Open `src/app/data/catalogueData.ts` and modify:

```typescript
{
  name: "HAIR",           // Category name
  subtitle: "SERVICES",   // Category subtitle
  women: [                // Gender section
    {
      title: "Hair Cut",  // Subsection title
      services: [
        {
          name: "Hair Cut",
          description: "Professional haircut...",
          price: "₹400",
        },
        // Add more services...
      ],
    },
  ],
  men: [...],
  kids: [...],
}
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (preview at localhost:5173) |
| `npm run generate` | Generate images + PDF |
| `npm run build` | Build for production |

## Output

After running `npm run generate`:

- `catalogue-images/` - Individual page images (JPEG)
- `catalogue.pdf` - Final combined PDF

## Requirements

- Node.js 18+
- npm
