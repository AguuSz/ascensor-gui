const swal = require('sweetalert2');
function detect_faces() {
    document.getElementById("detect").value = "Hang on..."
    var python = require("python-shell")
    var path = require("path")

    var options = {
        scriptPath : path.join(__dirname, "../../scripts/app.py")
    }

    var face = new python("faces.py", options);

    face.end(function(err, code, message) {
        document.getElementById("detect").value = "Detect faces";
    })
}
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', function(event) {
    var ps = require("python-shell")
    var path = require("path")
    name = document.getElementById("name").value

    var options = {
        scriptPath : path.join(__dirname, "../scripts/"),
        pythonPath: "/home/agus/.local/share/virtualenvs/facialRecog-OpenCV-SWeLqkmQ/bin/python",
        args : ["cam", name]
    }

    ps.PythonShell.run('capture_face.py', options, function (err, results) {
        if (err) throw err;
        Swal.fire(
            'Buen trabajo',
            'Persona añadida con exito!',
            'success'
        )
    });
})

function add_face() {
    var ps = require("python-shell")
    var path = require("path")
    name = document.getElementById("name").value

    var options = {
        scriptPath : path.join(__dirname, "../scripts/"),
        pythonPath: "/home/agus/.local/share/virtualenvs/facialRecog-OpenCV-SWeLqkmQ/bin/python",
        args : ["cam", name]
    }

    ps.PythonShell.run('capture_face.py', options, function (err, results) {
        if (err) throw err;
        Swal.fire(
            'Buen trabajo',
            'Persona añadida con exito!',
            'success'
        )
    });


}

