1. index.html
Why?

It is the single HTML page loaded by the browser and provides the root element where React is mounted.

Flow

Browser

↓

index.html
2. src/main.tsx
Why?

It is the entry point of the React application that initializes React and renders App.tsx into the root element.

Flow

index.html

↓

main.tsx
3. src/App.tsx
Why?

It is the root React component that controls the overall structure of the application.

Flow

main.tsx

↓

App.tsx
4. src/pages/
Why?

It contains complete screens/pages of the application.

Examples:

Dashboard

Goals

Analytics

Settings

Flow

App.tsx

↓

pages
5. src/components/
Why?

It contains small reusable UI elements used inside pages.

Examples:

Navbar

GoalCard

ProgressBar

TaskCard

Flow

pages

↓

components
6. src/assets/
Why?

It stores images, icons and other media files used inside components.

Flow

components

↓

assets
Complete mental model
User opens website

↓

Browser

↓

index.html

↓

main.tsx

↓

App.tsx

↓

pages

↓

components

↓

assets

↓

UI appears
One-line interview answers
index.html

Creates the root container for React.

main.tsx

Starts the React application and renders App.

App.tsx

Root component that organizes the application.

pages

Stores complete screens.

components

Stores reusable UI pieces.

assets

Stores static media files.

---------------------------------------------------------------------

tsconfig.json
Why?

It configures how TypeScript compiles and checks your code.

Who uses it?
TypeScript

↓

tsconfig.json


vite.config.ts
Why?

It configures how Vite builds and serves the application.

Who uses it?
Vite

↓

vite.config.ts

---------------------------------------------------------------

2. tsconfig.app.json
Why?

It configures TypeScript for your React application code.

It applies to:

src/

App.tsx

main.tsx

components/

pages/

Think:

Browser side (frontend UI)
3. tsconfig.node.json
Why?

It configures TypeScript for Node.js-related files.

It applies to files like:

vite.config.ts

Think:

Development/build environment

Not code that runs in the browser.

-----------------------------------------------------------------