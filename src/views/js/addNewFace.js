const remotex = require('electron').remote;
const { dialog } = remotex


const salirBtn = document.getElementById('cancelarBtn');
salirBtn.addEventListener('click', function(event) {
    var window = remotex.getCurrentWindow();
    window.close();
})

const guardarBtn = document.getElementById('guardarBtn');
guardarBtn.addEventListener('click', function(event) {
    const options = {
        type: "question",
        buttons: ['Si', 'No'],
        defaultId: 1,
        title: 'Confirmacion',
        message: '¿Estas seguro de añadir a esta persona?',
        detail: 'Confirme para continuar',
    
    };
    
    dialog.showMessageBox(null, options, (response) => {
        // Aca poner el if. No = (1), Si = (0)
        
        console.log(response);
    });
    
})
