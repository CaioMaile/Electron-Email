const { app, BrowserWindow, ipcMain } = require("electron")
const {join} = require("path")
const EnviarEmail = require("./functions/EnviarEmail")
app.whenReady()   
    .then(() => {
        ipcMain.on("EnviarEmail", EnviarEmail)
        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            height: 600,
            resizeble: false,
            width: 600,
            webPreferences:{
                preload: join(__dirname, "preload.js")
            }
        })
        janela.loadFile("./public/Compose.html")
    })
