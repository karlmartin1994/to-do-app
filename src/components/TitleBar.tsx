import React from 'react';
import '../styles/components/TitleBar.css';

const remote = window.require('@electron/remote');

interface TitleBarProps {
  isDarkMode: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({ isDarkMode }) => {
  const handleMinimize = () => {
    const window = remote.getCurrentWindow();
    window.minimize();
  };

  const handleMaximize = () => {
    const window = remote.getCurrentWindow();
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  };

  const handleClose = () => {
    const window = remote.getCurrentWindow();
    window.close();
  };

  return (
    <div className={`titleBar ${isDarkMode ? 'themeDark' : 'themeLight'}`}>
      <div className="titleBarDrag">
        <span className="appName">To-Do App</span>
      </div>
      <div className="titleBarButtons">
        <button className="titleBarButton minimize" onClick={handleMinimize}>
          <span>─</span>
        </button>
        <button className="titleBarButton maximize" onClick={handleMaximize}>
          <span>□</span>
        </button>
        <button className="titleBarButton close" onClick={handleClose}>
          <span>×</span>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
