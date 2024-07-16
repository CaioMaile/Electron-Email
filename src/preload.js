const { contextBridge, ipcRenderer } = require("electron")
contextBridge.exposeInMainWorld("electron", {
    EnviarEmail: (resultados) => {
        ipcRenderer.send("EnviarEmail", resultados)
    }
})