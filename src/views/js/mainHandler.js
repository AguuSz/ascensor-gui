const remotex = require('electron').remote;
const app = remotex.app;
const BrowserWindow = remotex.BrowserWindow;
const path = require('path');
const url = require('url');

const addNewFaceBtn = document.getElementById('iniciar');
addNewFaceBtn.addEventListener('click', function(event) {
    //Menu.setApplicationMenu(null);
    
    addNewFace = new BrowserWindow({
        width: 450,
        height: 530,
        title: "Añadir sujeto",
        //resizable: false,
        //frame: false
        webPreferences: {
            nodeIntegration: true
        }
    });
    addNewFace.loadURL(url.format({
        pathname: path.join(__dirname, "../views/addNewFace.html"),
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
const tutorialBtn = document.getElementById('tutorial');
tutorialBtn.addEventListener('click', function(event) {
    console.log(path.join(__dirname, "../views/addNewFace.html"));
})

