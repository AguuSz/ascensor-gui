const remotex = require('electron').remote;
const app = remotex.app;
const BrowserWindow = remotex.BrowserWindow;
const path = require('path');
const url = require('url');

let tutorialWindow;

const iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', function(event) {
    
    var window = remotex.getCurrentWindow();
    window.loadURL(url.format({
        pathname: path.join(__dirname, "../views/homepage.html"),
        protocol: 'file',
        slashes: true
    }));
    window.on('closed', () => {
        window = null;
    })
})

const salirBtn = document.getElementById('salir');
salirBtn.addEventListener('click', function(event) {
    app.quit();
})
const tutorialBtn = document.getElementById('tutorial');
tutorialBtn.addEventListener('click', function(event) {
    // Si presionan el Btn de tutorial, que pase esto
    tutorialWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 870,
        height: 600,
        //resizable: false
        //show: false,
    });

    tutorialWindow.loadURL(url.format({
        pathname: path.join(__dirname, "tutorial.html"),
        protocol: 'file',
        slashes: true
    }));

    //tutorialWindow.on('ready-to-show', () => {
    //    tutorialWindow.show();
    //})

    tutorialWindow.on('closed', () => {
        tutorialWindow = null;
    })
})

