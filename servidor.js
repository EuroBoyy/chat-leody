const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.on('connection', (socket) => {
    console.log('Usuário conectado');
    
    socket.on('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
});

aplicacao.use(express.static('public'));

// Modificação na linha abaixo para que a porta seja atribuída dinamicamente pelo ambiente da Vercel
servidorHttp.listen(process.env.PORT || 3000);




// função  flecha!!!
// () => {

//     return
// }