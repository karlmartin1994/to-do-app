<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Electron App with React and TypeScript

This is an Electron application using React and TypeScript. The project has the following structure:

- `src/main.ts`: Electron main process
- `src/renderer.tsx`: React entry point for renderer process
- `src/App.tsx`: Main React component
- `webpack.config.js`: Configuration for building both main and renderer processes

## Development Workflow

- Use `npm run build` to build the application
- Use `npm run watch` to build and watch for changes
- Use `npm run start` to launch the Electron app
- Use `npm run dev` to build and start the app in one command

## Code structure

- Components should be placed in the `src/components` directory
- Styles should be placed in the `src/styles` directory and each component should have its own CSS file
- App theme should be defined in `src/styles/theme.ts`