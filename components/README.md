# Components Structure

This folder contains all reusable React components organized by their purpose.

## Folder Structure

```
components/
├── layout/           # Layout components (Navbar, Footer, etc.)
│   └── Navbar.tsx
├── sections/         # Page sections (Hero, Features, etc.)
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── index.ts
│   ├── services/
│   │   ├── Services.tsx
│   │   └── index.ts
│   └── why-choose/
│       ├── WhyChoose.tsx
│       └── index.ts
└── ui/              # Reusable UI components (Buttons, Cards, etc.)
```

## Usage

Import components using the `@/` alias:

```tsx
import Navbar from '@/components/layout/Navbar';
import Button from '@/components/ui/Button';
```

## Guidelines

- Keep components small and focused
- Use TypeScript for type safety
- Follow the naming convention: PascalCase for component files
- Add proper props typing for all components
