# Space Trivia (WW Kiosk)

Touch-friendly space trivia web app inspired by industrial WW museum kiosk screens. Built with **Next.js App Router**, **TypeScript**, and custom CSS.

## Categories (50 questions each)

1. Early Manned Spaceflights  
2. Modern Spaceflight  
3. To The Moon  
4. Our Solar System And Beyond  

**Total: 200 multiple-choice questions (A–D).**

## Screens

- **Home** — 2×2 category grid with center WW logo  
- **Category intro** — nebula backdrop with angular chrome frames  
- **Quiz** — brushed-metal answer rail, glowing A–D buttons, Main Menu  

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub.  
2. Import the project in [Vercel](https://vercel.com/new).  
3. Framework preset: **Next.js** (default).  
4. Click **Deploy** — no env vars required.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project layout

- `src/app` — App Router pages (home, category intro, quiz)  
- `src/components` — kiosk UI  
- `src/data` — static JSON question banks  
- `public/` — SVG backgrounds and category art  
