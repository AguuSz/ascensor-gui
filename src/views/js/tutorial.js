const electron = require('electron');
const remote = electron.remote;
const path = require('path');
const url = require('url');

const atrasBtn = document.getElementById('atrasBtn');
atrasBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
});
const siguienteBtn = document.getElementById('siguienteBtn');
siguienteBtn.addEventListener('click', function(event) {

});