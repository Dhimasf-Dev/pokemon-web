# My Next.js App

This is a simple Next.js pokemon web which use of the App Router.

## Features

- Modular routing with the `app/` directory
- Server-side rendering (SSR)
- Dynamic routes
- API routes
- Atomic design

## Technology

- Tanstack Query
- Zod.
- React Hook Form
- react-redux
- redux-persist

## Styling
- Tailwind CSS

## Project Stucture

```bash
    app/
    components/         // Component folder
        atoms           // atoms folder
        molecules       // molecule folder
        organism        // organism folder
        pages           // pages folder
        templates       // templates folder
    layout.js           // Root layout
    page.js             // Home page
    [folderName]/       // Dynamic folder
        page.js         // Dynamic page based on folder name
    api/
        route.js        // API route
    public/
    ...                 // Public assets
    styles/
    ...                 // CSS styles
    next.config.js      // Next.js configuration
    package.json        // Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
