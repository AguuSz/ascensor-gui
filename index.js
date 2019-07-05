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
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu)

    // Cuando se cierre la ventana principal, cierra todo el resto
    mainWindow.on('closed', () => {
        app.quit();
    })
});

function addNewFaceWindow () {
    // Eliminamos la barra de navegacion superior
    Menu.setApplicationMenu(null);
    
    addNewFace = new BrowserWindow({
        width: 450,
        height: 530,
        title: "Añadir sujeto",
        resizable: false,
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

// Creando un menu de navegacion custom
const templateMenu = [
    {
        // Botones principales
        label: 'File',
        submenu: [
            {
                // SubBotones
                label: 'New Product',
                accelerator: 'Ctrl+N',
                click() {
                    addNewFaceWindow();
                }
            },
            {
                label: 'Remove all products',
                click() {

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