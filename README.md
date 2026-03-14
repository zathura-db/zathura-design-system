# @zathura-db/react-design-system

A React component library built with Tailwind CSS and TypeScript, featuring a custom theme and rich interactive components.

## Components

| Component               | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `AnimatedText`          | Typing-effect animated text with optional prefix                            |
| `Button`                | Multi-variant button with theme colors and hover effects                    |
| `Carousel`              | Infinite-loop 3-card carousel with auto-rotate support                      |
| `Chart`                 | Horizontal skill bar chart                                                  |
| `DirectionButtons`      | Previous/Next navigation arrow buttons                                      |
| `DropDown`              | Collapsible dropdown with animated open/close                               |
| `Footer`                | Simple footer with LinkedIn icon                                            |
| `InformationCard`       | Project card with image, description, and action buttons                    |
| `HiddenInformationCard` | SEO-only hidden card (for carousel use)                                     |
| `LinkText`              | Themed anchor/link component                                                |
| `Navigation`            | Sticky top navigation bar                                                   |
| `Pagination`            | Auto-generated scroll-based dot pagination                                  |
| `ProjectTile`           | Responsive project showcase tile (mobile card / desktop hover overlay)      |
| `Section`               | Section wrapper with heading, underline, colour themes, and chevron variant |
| `StarBackground`        | Animated parallax starfield background                                      |
| `Timeline`              | Vertical work history timeline with collapsible project details             |

## Installation

```bash
npm install @zathura-db/react-design-system
```

**Peer dependencies** – install if not already present:

```bash
npm install react react-dom
```

## Usage

### 1. Import the stylesheet

Add the stylesheet **once** at the root of your application (e.g. `main.tsx` / `_app.tsx`):

```tsx
import "@zathura-db/react-design-system/styles.css";
```

### 2. Import components

```tsx
import { Button, Chart, Timeline } from "@zathura-db/react-design-system";

export default function App() {
  return (
    <Button baseColour="orange" hoverStyle="orangeOffset">
      Hello World
    </Button>
  );
}
```

### 3. Tailwind CSS consumers

If your project uses Tailwind, extend the `content` paths in your `tailwind.config.ts` so Tailwind does not purge the library's classes:

```ts
// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@zathura-db/react-design-system/dist/**/*.{js,mjs}",
  ],
  // ...
};
```

Alternatively, simply import `styles.css` (which includes a pre-built Tailwind output with all library classes).

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Type-check
npm run type-check
```

## Theme Colours

| Token            | Hex       |
| ---------------- | --------- |
| `themeRed`       | `#ED0101` |
| `themeRedOffset` | `#C70000` |
| `themeOrange`    | `#ED7701` |
| `themeBlue`      | `#0177ED` |
| `themeGreen`     | `#009500` |
| `themePurple`    | `#7701ED` |
| `themeBlack`     | `#131A25` |

## License

MIT
