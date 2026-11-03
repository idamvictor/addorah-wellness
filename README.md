# Addorah Wellness

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui.

## Scripts

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Adding UI components

```bash
npx shadcn@latest add card dialog input
```

Components land in `src/components/ui`. Theme tokens live in `src/app/globals.css`.

## State (Zustand)

Stores live in `src/stores` as `createStore` factories and are provided per request by
`src/providers/app-store-provider.tsx` (wired up in the root layout). Read state in
client components only:

```tsx
"use client";
import { useAppStore } from "@/providers/app-store-provider";

const sidebarOpen = useAppStore((s) => s.sidebarOpen);
```

Server Components must not read from or write to the store.
