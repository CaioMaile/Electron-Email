const nodemailer = require ("nodemailer")
const { dialog } = require("electron")

function EnviarEmail(evento, resultados) {
    const transportador = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "caiomailesla@gmail.com",
            pass: "llbtudemkilfpfke"
        }
    })
    const mensagem = {
        from: "caiomailesl@gmail.com",
        to: resultados.destino,
        subject: resultados.titulo,
        text: resultados.corpo
    }
    transportador.sendMail(mensagem)
        .then((resposta) => {
            dialog.showMessageBox({
                type: "info",
                title: "Digitando Emails",
                message: `Email enviado com sucesso!\n${resposta.accepted.join()}`
            })
        })
        .catch((erro) => {
            console.log(erro)
        })
}
module.exports = EnviarEmail
