const express = require('express');
const app = express();
const series = [
    {id: 1, 
    nome: 'Dark'},
    {id: 2,
    nome: 'The Mandalorian'}
]

app.get('/series/:id', (req, res) => {
    
    res.send(req.params.id)
    
})

app.listen(3333, () => 
console.info("Servido Executando")
)