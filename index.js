const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

// Si el proceso esta en cualquier fase diferente a la de produccion, que se pueda
// recargar utilizando electron-reload
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

// Declaramos las ventanas que se van a abrir
let mainWindow
let addNewFace
let confirmation

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 870,
        height: 600,
        resizable: false,
        icon: __dirname + "../img/icono.ico"
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    console.log(__dirname);

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu)

    // Cuando se cierre la ventana principal, cierra todo el resto
    mainWindow.on('closed', () => {
        app.quit();
    })
});

function addNewFaceWindow () {
    addNewFace = new BrowserWindow({
        width: 450,
        height: 530,
        title: "Añadir sujeto",
        resizable: false,
        icon: path.join(__dirname, 'src', 'img', 'icono.ico'),
        //frame: false
    });
    addNewFace.loadURL(url.format({
        pathname: path.join(__dirname, "src/views/addNewFace.html"),
        protocol: 'file',
        slashes: true
    }));
    addNewFace.on('closed', () => {
        addNewFace = null;
    })
}


// Cuando se aprete un boton de cancelar, mostrar esta ventana
function confirmationWindow () {
    Menu.setApplicationMenu(null);

    confirmation = new BrowserWindow({
        width: 300,
        height: 130,
        title: "Confirmación",
        resizable: false,
        frame: false
    });

    confirmation.loadURL(url.format({
        pathname: path.join(__dirname, "src/views/confirmation.html"),
        protocol: 'file',
        slashes: true
    }));
    confirmation.on('closed', () => {
        confirmation = null;
    })
}

// Creando un menu de navegacion custom
const templateMenu = [
    {
        // Botones principales
        label: 'File',
        submenu: [
            {
                // SubBotones
                label: 'Nuevo sujeto',
                accelerator: 'Ctrl+N',
                click() {
                    addNewFaceWindow();
                }
            },
            {
                label: 'Remove all products',
                click() {
                    confirmationWindow();
                }
        
            },
            {
                label: 'Exit',
                // Este shorcut va a funcionar tanto para Mac como para Windows
                // Funciona de la siguiente manera: Si detecta que es una mac aka darwin,
                // va a tomar el command+Q, caso contrario (se indica con los :), funcionara
                // solo al presionar ctrl+Q
                accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

if (process.platform === 'darwin') {
    templateMenu.unshift({
        label: app.getName()
    })
}

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'Dev-Tools',
        submenu: [
            {
                label: 'Show/Hide Dev-Tools',
                accelerator: "Ctrl+D",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}