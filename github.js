import express from "express";

const servidor = express();

servidor.get('/projeto/soma/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2

    resp.send({
        soma:soma
    });

})

servidor.get('/projeto/subtrair/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let sub = n1 - n2

    resp.send({
        sub : sub
    });

})


servidor.listen(
    5050,
    () => console.log('Api subiu com sucesso na porta 5050'));
