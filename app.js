const express = require('express');
const app = express();
const series = [
    {id: 1, 
    nome: 'Dark'},
    {id: 2,
    nome: 'The Mandalorian'}
]


/*app.get("/series/:id", (req, res) => res.send(series.filter(serie => serie.id == req.params.id)[0])) */


app.get('/serie/:id', (req, res) => {
    let id = req.params.id
    res.send(serie => series.find(function(serie){
    serie.id = id
})

)})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))