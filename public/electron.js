const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

const MainBrowserWindow = require('./main_browser_window');
// Allows for live-reload while developing the app

require('electron-reload')(__dirname + '/build');

let mainWindow;

function createWindow() {
    mainWindow = MainBrowserWindow();

    mainWindow.loadURL(
        isDev ?
            'http://localhost:3000' :
            `file://${path.join(__dirname, '../build/index.html')}`
    )

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', ()=>{
    if(mainWindow == null) {
        createWindow();
    }   
})