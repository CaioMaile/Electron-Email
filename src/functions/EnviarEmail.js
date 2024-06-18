const nodemailer = require ("nodemailer")
const {dialog} = require("electron")

function EnviarEmail(evento, resultados) {
    const transportador = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "caiomailesla@gmail.com",
            pass: ""
        }
    })
}
