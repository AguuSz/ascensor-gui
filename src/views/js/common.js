const electron = require('electron');
const remote = electron.remote;
const path = require('path');
const url = require('url');

const salirBtn = document.getElementById('salirBtn');
salirBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
});
