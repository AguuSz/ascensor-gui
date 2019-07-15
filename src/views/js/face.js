const swal = require('sweetalert2');
const ps = require('python-shell');
const path = require('path');
const remote = require('electron').remote;

// Funcion para añadir un rostro
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', function(event) {
    window.name = document.getElementById("name").value;

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
        )
    });
    document.getElementById('name').value = "";
})

// Funcion para cancelar
const cancelarBtn = document.getElementById('cancelarBtn');
cancelarBtn.addEventListener('click', function(event) {
    console.log(name);
    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            var options = {
                scriptPath : path.join(__dirname, "../scripts/"),
                pythonPath: "/home/agus/.local/share/virtualenvs/facialRecog-OpenCV-SWeLqkmQ/bin/python",
                args: [name]
            }
            ps.PythonShell.run('delete.py', options, function(err, results) {
                if (err) throw err;
            });
            //var window = remote.getCurrentWindow();
            //window.close();
        }
      });
})

const guardarBtn = document.getElementById('guardarBtn');
guardarBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
})

