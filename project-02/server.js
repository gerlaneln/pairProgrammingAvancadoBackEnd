/*
Esse código cria um servidor Node.JS utilizando o módulo http. Criando rotas para servir o projeto-02, ainda em andamento.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

/*
Criação de um servidor na porta local 5000, utilizando o módulo http
*/

http.createServer((req, res) => {
    /*
    Mostrando a página index.html no navegador, utilizando os módulos fs (para buscar e ler o arquivo na pasta public), path (criar o caminho do arquivo usando join), e http (mostrar a página no navegador usando end)
    */
    if(req.url === '/')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.end(content);
        });

}).listen(5000, () => {console.log('Server is running.')});

