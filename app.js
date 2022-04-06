const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Servidor2/index.html'))
})

app.listen(3000, () => 
console.info("Servido Executando")
)