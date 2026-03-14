# @zathura/react-design-system

A React component library built with TypeScript and Tailwind CSS, providing a rich set of themed, interactive UI components.

[![License: CC-BY-NC-4.0](https://img.shields.io/badge/License-CC--BY--NC--4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![npm](https://img.shields.io/npm/v/@zathura/react-design-system)](https://www.npmjs.com/package/@zathura/react-design-system)

**Author:** [Daniel Barrow](https://danielbarrow.dev) · **Repository:** [zathura-db/zathura-design-system](https://github.com/zathura-db/zathura-design-system)

---

## Components

| Component               | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `AnimatedText`          | Typing-effect animated text with optional prefix                            |
| `Button`                | Multi-variant button with theme colours and hover effects                   |
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

---

## Installation

```bash
npm install @zathura/react-design-system
```

**Peer dependencies** – install if not already present:

```bash
npm install react react-dom
```

> Requires React 17 or later.

---

## Usage

### 1. Import the stylesheet

Add the stylesheet **once** at the root of your application (e.g. `main.tsx` / `_app.tsx`):

```tsx
import "@zathura/react-design-system/styles.css";
```

### 2. Import components

```tsx
import { Section, Timeline } from "@zathura/react-design-system";

export default function App() {
  return (
    <Section sectionTitle="Experience" colour="black">
      <Timeline
        PrimaryColour="Orange"
        Timelines={[
          {
            JobTitle: "Software Engineer",
            companyName: "Acme Corp",
            startDate: "Jan 2023",
          },
        ]}
      />
    </Section>
  );
}
```

### 3. Tailwind CSS consumers

If your project uses Tailwind, extend the `content` paths in your `tailwind.config.ts` so the library's classes are not purged:

```ts
// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@zathura/react-design-system/dist/**/*.{js,mjs}",
  ],
  // ...
};
```

Alternatively, import `styles.css` (which includes a pre-built Tailwind output with all library classes already included).

---

## Component Props

### `Button`

| Prop         | Type                                                                                                                                                              | Default    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `baseColour` | `"red"` \| `"orange"` \| `"blue"` \| `"green"` \| `"purple"` \| `"black"` \| `"orangeOutline"`                                                                    | `"red"`    |
| `hoverStyle` | `"white"` \| `"redOffset"` \| `"orangeOffset"` \| `"blueOffset"` \| `"greenOffset"` \| `"purpleOffset"` \| `"blackOffset"` \| `"orangeFill"` \| `"orangeOutline"` | `"white"`  |
| `buttonSize` | `"small"` \| `"large"`                                                                                                                                            | `"large"`  |
| `display`    | `"inline"` \| `"block"`                                                                                                                                           | `"inline"` |
| `textColour` | `"white"`                                                                                                                                                         | `"white"`  |

Also accepts all native `<button>` HTML attributes.

### `Section`

| Prop                      | Type                                                          | Default    |
| ------------------------- | ------------------------------------------------------------- | ---------- |
| `sectionTitle`            | `string`                                                      | —          |
| `colour`                  | `"white"` \| `"black"` \| `"orange"` \| `"blue"` \| `"green"` | `"white"`  |
| `type`                    | `"normal"` \| `"chevron"`                                     | `"normal"` |
| `disableHeading`          | `boolean`                                                     | `false`    |
| `disableUnderline`        | `boolean`                                                     | `false`    |
| `underlineColourOverride` | `string`                                                      | —          |
| `children`                | `ReactNode`                                                   | —          |

### `Timeline`

| Prop            | Type                                                                      | Default |
| --------------- | ------------------------------------------------------------------------- | ------- |
| `Timelines`     | `TimelineItem[]`                                                          | —       |
| `PrimaryColour` | `"Orange"` \| `"Blue"` \| `"Green"` \| `"Red"` \| `"Purple"` \| `"Black"` | —       |

`TimelineItem` shape:

```ts
{
  JobTitle: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  content?: string[];
  projects?: {
    ShortDescription: string;
    Description: string;
    BulletPoints?: string[];
  }[];
}
```

---

## Theme Colours

| Token            | Hex       |
| ---------------- | --------- |
| `themeBlack`     | `#131A25` |
| `themeRed`       | `#ED0101` |
| `themeRedOffset` | `#C70000` |
| `themeOrange`    | `#ED7701` |
| `themeBlue`      | `#0177ED` |
| `themeGreen`     | `#009500` |
| `themePurple`    | `#7701ED` |

---

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

---

## License

[CC-BY-NC-4.0](https://creativecommons.org/licenses/by-nc/4.0/) © [Daniel Barrow](https://danielbarrow.dev)
