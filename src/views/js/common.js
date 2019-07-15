const electron = require('electron');
const remote = electron.remote;

const salirBtn = document.getElementById('salirBtn');
salirBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
});