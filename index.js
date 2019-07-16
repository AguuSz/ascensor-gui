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
let mainWindow;
let iniciarWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 870,
        height: 600,
        //resizable: false,
        icon: __dirname + "../img/icono.ico"
    });
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