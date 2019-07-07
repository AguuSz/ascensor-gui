const electron = require('electron');
const app = electron.remote.app;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const url = require('url');

const addNewFaceBtn = document.getElementById('iniciar');
addNewFaceBtn.addEventListener('click', function(event) {
    //Menu.setApplicationMenu(null);
    
    addNewFace = new BrowserWindow({
        width: 450,
        height: 530,
        title: "Añadir sujeto",
        resizable: false,
        //frame: false
    });
    addNewFace.loadURL(url.format({
        pathname: path.join(__dirname, "../addNewFace.html"),
        protocol: 'file',
        slashes: true
    }));
    addNewFace.on('closed', () => {
        addNewFace = null;
    })
})

const salirBtn = document.getElementById('salir');
salirBtn.addEventListener('click', function(event) {
    app.quit();
})

