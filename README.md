# Ruhan Monte - Portfolio Website

A modern, responsive portfolio website for Ruhan Monte, a Software Engineering Consultant.

## Tech Stack

- React
- TypeScript
- Vite
- React Icons
- CSS Modules

## Project Structure

The project follows a component-based architecture with CSS modules for styling:

```
my-portfolio/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg
│   ├── components/
│   │   ├── Header/
│   │   ├── SkillsGrid/
│   │   ├── ProjectsGrid/
│   │   ├── ExperienceTimeline/
│   │   ├── ContactSection/
│   │   └── PrinciplesSection/
│   ├── data/
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── principles.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and visit: `http://localhost:5173`

## Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## License

MIT