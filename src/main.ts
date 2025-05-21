import { app, BrowserWindow, Tray, Menu } from 'electron';
import * as path from 'path';
import * as remote from '@electron/remote/main';

// Initialize remote module
remote.initialize();

let isQuitting = false;
let mainWindow: Electron.BrowserWindow | null;
let tray: Electron.Tray | null = null;

function createTray() {
  const iconPath = path.join(__dirname, 'assets', 'icon.png');
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
        } else {
          createWindow();
        }
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
  ]);
  tray.setToolTip('Todo App');
  tray.setContextMenu(contextMenu);

  // Add click handler to tray icon
  tray.on('click', () => {
    if (mainWindow) {
      mainWindow.show();
    } else {
      createWindow();
    }
  });
}

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
  }  // Handle window close event - hide instead of closing
  mainWindow.on('close', (event: Electron.Event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow?.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window and tray when app is ready
app.whenReady().then(() => {
  createWindow();
  createTray();
});

// Prevent default quit behavior when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (!isQuitting) {
      // On Windows and Linux, we prevent the default quit
      return;
    }
    app.quit();
  }
});

// Create a new window when app is activated (macOS)
app.on('activate', (event: Electron.Event, hasVisibleWindows: boolean) => {
  if (mainWindow === null) {
    createWindow();
  } else {
    mainWindow.show();
  }
});

// Add before-quit event handler
app.on('before-quit', (event: Electron.Event) => {
  isQuitting = true;
});
