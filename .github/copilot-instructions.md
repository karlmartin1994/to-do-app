<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Electron App with React and TypeScript

This is an Electron application using React and TypeScript. The project has the following structure:

- `src/Main.ts`: Electron main process
- `src/Renderer.tsx`: React entry point for renderer process
- `src/App.tsx`: Main React component
- `webpack.config.js`: Configuration for building both main and renderer processes

## File Naming Conventions

1. **React Components** (`.tsx`, `.jsx`, `.js`):
   - Use PascalCase
   - Must match the component name inside the file
   - Examples: `AppContainer.tsx`, `TaskList.tsx`, `ThemeToggle.tsx`

2. **Entry Point Files**:
   - HTML and index files: lowercase (`index.html`, `index.tsx`)
   - Electron entry points: PascalCase (`Main.ts`, `Renderer.tsx`)

3. **CSS Files**:
   - Global/utility CSS: lowercase with hyphens (`global.css`, `theme.css`)
   - Component-specific CSS: Match component name (`AppContainer.css`)

4. **Configuration Files**:
   - Always lowercase (`package.json`, `tsconfig.json`, `webpack.config.js`)

5. **Documentation Files**:
   - Uppercase with extension (`README.md`, `LICENSE.md`)

6. **Directory Names**:
   - Always lowercase
   - Use hyphens for multiple words
   - Examples: `components`, `styles`, `utils`, `test-utils`

## Development Workflow

- Use `npm run build` to build the application
- Use `npm run watch` to build and watch for changes
- Use `npm run start` to launch the Electron app
- Use `npm run dev` to build and start the app in one command

## Code Structure

- Components should be placed in the `src/components` directory
- Styles should be placed in the `src/styles` directory and each component should have its own CSS file

## CSS File Organization

1. **Global Styles**
   - `src/styles/global.css`: Base styles, resets, and root-level styles
   - `src/styles/theme.css`: Theme variables and theme-specific styles

2. **Component Styles**
   - All component-specific styles should be in `src/styles/components/`
   - Named to match their component: Use PascalCase to match component name
   - Example: `src/styles/components/AppContainer.css`

## CSS Naming Conventions

Follow these naming conventions for CSS classes:

1. **Component Classes**:
   - Use camelCase
   - Prefix with component name
   - Examples: `todoItem`, `taskInput`, `themeToggle`

2. **Container/Wrapper Classes**:
   - Use camelCase
   - Suffix with 'Container' or 'Wrapper'
   - Examples: `appContainer`, `todoContainer`, `taskListContainer`

3. **State Modifiers**:
   - Use camelCase
   - Prefix with 'is' or 'has' for boolean states
   - Examples: `isCompleted`, `isActive`, `hasError`

4. **Theme Variants**:
   - Use camelCase
   - Prefix with 'theme'
   - Examples: `themeLight`, `themeDark`

5. **Utility Classes**:
   - Use camelCase
   - Be descriptive of the utility
   - Examples: `textPrimary`, `boxShadowSm`, `flexCenter`

6. **Component Parts**:
   - Use camelCase
   - Use semantic naming
   - Examples: `todoTitle`, `taskDescription`, `deleteButton`

## CSS Best Practices

1. Keep component-specific styles in their respective CSS files
2. Use CSS variables for theming and reusable values
3. Follow a consistent naming pattern across all components
4. Keep selectors simple and avoid deep nesting
5. Use BEM-like naming for related elements (e.g., `todoItem`, `todoItemTitle`, `todoItemCompleted`)
6. Avoid using global styles except for theme variables and reset styles

## Theme Structure

- Theme variables should be defined in `src/styles/global.css`
- Global stylings should be defined in `src/styles/theme.css`
- Light and dark theme variants should use the `themeLight` and `themeDark` classes
- Component styles should use theme variables for colors, spacing, and other theme-specific properties