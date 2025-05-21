import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as remote from '@electron/remote/main';

// Initialize remote module
remote.initialize();

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    backgroundColor: '#00ffffff',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Enable remote module for this window
  remote.enable(mainWindow.webContents);

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools in development mode
  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools();
  }

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when app is activated (macOS)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
