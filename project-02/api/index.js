const http = require('http');
const data = require('./urls.json');
const URL = require('url');
const fs = require('fs');
const path = require('path');

//Função para escrever os links no arquivo urls.json
function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err;
            cb('Operação realizada com sucesso');
        }
    )
}

// criando servidor na porta 3000 para API do projeto-02
http.createServer((req, res) => {

    //Tratamento do CORS
    res.writeHead(
        200,
        {"Access-Control-Allow-Origin":"*"}
    );

    console.log(URL.parse(req.url, true).query);
//desestruturação da url para identificação dos parametros da query
    const { name, url, del } = URL.parse(req.url, true).query;

//Se não tiver name e url, retona as urls presentes no arquivo urls.json
    if(!name || !url)
        return res.end(JSON.stringify(data));
//Se tiver o terceiro parametro del, retornar as urls presentes no arquivo urls.json, exceto a que foi passada para ser excluída.
//Após é chamada a função que reescreve o arquivo urls.json  
    if(del){
        data.urls = data.urls.filter(item => item.url != url);
        return writeFile(message => res.end(message));
    }
// se tiver name, url, elas são acrescentadas no arquivo urls.json
    data.urls.push({name, url});
    return writeFile(message => res.end(message));

}).listen(3000, () => console.log('API is running.'))