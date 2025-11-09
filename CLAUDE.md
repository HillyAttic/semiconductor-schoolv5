# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Brand Forge** is a React-based marketing/branding agency website with a distinctive **brutalist design system**. The application uses modern React patterns with a component-driven architecture and emphasizes bold, high-contrast visuals.

## Tech Stack

- **Framework**: React 18 with functional components
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router v6
- **State Management**: Redux Toolkit (installed, minimal usage)
- **Animations**: Framer Motion, Tailwind Animate
- **Data Visualization**: D3, Three.js, Recharts
- **Testing**: @testing-library/jest-dom, @testing-library/react

## Development Commands

```bash
# Start development server
npm start

# Build for production (generates sourcemaps)
npm run build

# Preview production build
npm run serve
```

## Project Structure

```
src/
├── pages/              # Route-level page components
│   ├── homepage/       # Landing page
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── contact/        # Contact page with form
│   ├── process/        # Process page
│   ├── case-study/     # Case studies (supports dynamic slugs)
│   └── NotFound.jsx    # 404 page
├── components/         # Shared components
│   ├── ui/            # Reusable UI components (Button, Input, Select, Checkbox, Header)
│   ├── AppIcon.jsx    # Icon component
│   ├── AppImage.jsx   # Image component
│   ├── BriefFormPopup.jsx
│   ├── ErrorBoundary.jsx  # Error handling
│   └── ScrollToTop.jsx
├── styles/
│   ├── tailwind.css   # Tailwind imports
│   └── index.css      # Global styles
├── utils/
│   └── cn.js          # ClassName utility (clsx wrapper)
├── App.jsx            # Root component
├── index.jsx          # Entry point
└── Routes.jsx         # Route configuration
```

## Architecture Patterns

### Page Structure
Each page follows a consistent pattern:
- Main page file in `src/pages/{route}/index.jsx`
- Page-specific components in `src/pages/{route}/components/`
- Components use descriptive naming (e.g., `HeroSection.jsx`, `WorkShowcase.jsx`)

### UI Components
Base UI components in `src/components/ui/` follow consistent patterns:
- Standardized props interface
- Support for variants (primary, outline, etc.)
- Icon support via `iconName` and `iconPosition` props
- Styled with Tailwind using design tokens

### Error Handling
- Global `ErrorBoundary` component catches runtime errors
- Error logging via `window.__COMPONENT_ERROR__` callback
- Custom 404 page with navigation options

## Design System

The application uses a **brutalist design** approach with:

### Custom Tailwind Tokens (in `tailwind.config.js`):
- **Colors**: Primary grays, accent orange, success/warning/error states
- **Shadows**: Brutalist box-shadows (`brutalist`, `brutalist-sm`, `brutalist-lg`)
- **Typography**: Inter font family, specific weight scale
- **Animations**: fade-in, slide-up/down, scale-in
- **Border**: Custom 3px border width

### Key Design Principles:
- High contrast (dark text on light backgrounds)
- Bold typography with black font weights
- Brutalist shadows for depth
- Orange accent color for CTAs
- Border-heavy design elements

## Routing

Routes are configured in `src/Routes.jsx`:
- `/` - Homepage
- `/services` - Services page
- `/contact` - Contact page
- `/process` - Process page
- `/about` - About page
- `/case-study` - Case study listing
- `/case-study/:slug` - Individual case study
- `/homepage` - Alternative homepage route
- `*` - 404 NotFound page

## Critical Dependencies

⚠️ **IMPORTANT**: The `package.json` contains a `rocketCritical` section with essential dependencies. **DO NOT REMOVE OR MODIFY** these dependencies:
- @dhiwise/component-tagger
- react
- react-dom
- @reduxjs/toolkit
- redux
- react-router-dom

## Build Configuration

- **Vite**: Basic config in `vite.config.js` with React plugin
- **Tailwind**: Extensive custom configuration with design tokens
- **Component Tagging**: Uses @dhiwise/component-tagger for component metadata
- **Production Build**: Generates sourcemaps by default

## Key Components

### ErrorBoundary
- Catches React component errors
- Displays fallback UI with error message
- Logs errors via `window.__COMPONENT_ERROR__`
- Provides navigation back to home

### Homepage Sections
The main page includes:
- Header with navigation
- Hero section
- Work showcase
- Capabilities grid
- Process navigation
- About section
- Contact form
- Footer

## Development Notes

- **Component Tagging**: @dhiwise/component-tagger is used for component analysis
- **TypeScript Support**: Not configured (JS files only)
- **CSS**: Tailwind-based with minimal custom CSS
- **State Management**: Redux Toolkit installed but not actively used in current implementation
- **Testing**: Test libraries installed but no test files detected

## Common Development Tasks

### Adding a New Page
1. Create `src/pages/{new-page}/index.jsx`
2. Add route in `src/Routes.jsx`
3. Create components in `src/pages/{new-page}/components/`

### Adding a UI Component
1. Create in `src/components/ui/{ComponentName}.jsx`
2. Follow existing patterns for props and variants
3. Use Tailwind classes and design tokens

### Modifying Styles
- Update `tailwind.config.js` for design tokens
- Use CSS custom properties for theme colors
- Follow brutalist design principles (high contrast, bold shadows)
