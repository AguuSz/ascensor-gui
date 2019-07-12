const remotex = require('electron').remote;
const app = remotex.app;
const BrowserWindow = remotex.BrowserWindow;
const path = require('path');
const url = require('url');

let tutorialWindow;


const salirBtn = document.getElementById('salir');
salirBtn.addEventListener('click', function(event) {
    var window = remotex.getCurrentWindow();
    window.close();
})

