# sample-electron

Simple Electron app with React and Vite

## Tech Stack

- **Electron** - Desktop application framework
- **React** - UI library
- **Vite** - Build tool and development server

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
npm install
```

## Development

Run the app in development mode:

```bash
npm run electron:dev
```

This will start the Vite dev server and launch the Electron app.

## Build

Build the React app:

```bash
npm run build
```

## Distribution

Create a distributable package for macOS:

```bash
npm run dist
```

Or build without packaging:

```bash
npm run dist:dir
```

The output will be in the `release` directory.

## Project Structure

```
sample-electron/
├── electron/       # Electron main process
├── src/           # React application source
├── dist/          # Build output
├── release/       # Distribution packages
└── index.html     # Entry HTML file
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build React app for production
- `npm run preview` - Preview production build
- `npm run electron` - Run Electron app
- `npm run electron:dev` - Run app in development mode
- `npm run dist` - Create macOS distribution package
- `npm run dist:dir` - Build without packaging

## License

ISC
