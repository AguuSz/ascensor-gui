const swal = require('sweetalert2');
const ps = require('python-shell');
const path = require('path');
const remote = require('electron').remote;

// Funcion para añadir un rostro
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(event) {
    name = document.getElementById("name").value;

    var options = {
        scriptPath : path.join(__dirname, "../scripts/"),
        pythonPath: "/home/agus/.local/share/virtualenvs/facialRecog-OpenCV-SWeLqkmQ/bin/python",
        args : ["cam", name]
    }

    ps.PythonShell.run('capture_face.py', options, function (err, results) {
        if (err) throw err;
        swal.fire(
            'Buen trabajo',
            'Persona añadida con exito!',
            'success'
        );
    });
})

const salirBtn = document.getElementById('salirBtn');
salirBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
})