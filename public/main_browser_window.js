const _ = require('lodash');
const { BrowserWindow } = require('electron');

module.exports = (options = {}) => {
    _.defaultsDeep(options, {
        width: 1800,
        height: 960,
        autoHideMenuBar: true,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    let win = new BrowserWindow(options)
    win.on('closed', () => {
        win = null
    })
    return win
}