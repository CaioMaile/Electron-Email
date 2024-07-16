const { app, BrowserWindow } = require("electron")
const {join} = require("path")
app.whenReady()   
    .then(() => {
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
