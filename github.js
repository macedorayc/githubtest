import express from "express";

const servidor = express();

servidor.get('/git/estudo/:n1/:n2', (resp,req) => {

let n1 = Number(req.params.n1)
let n2 = Number(req.params.n2)

let soma = n1 + n2


resp.send('A soma é ' + soma);

})


servidor.listen(
    5001,
    () => console.log('Api subiu com sucesso na porta 5001')) ;
