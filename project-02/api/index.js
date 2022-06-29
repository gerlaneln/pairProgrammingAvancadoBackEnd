
const http = require('http');
const data = require('./urls.json');
const URL = require('url');

// criando servidor na porta 3000 para api de teste.  

http.createServer((req, res) => {

    // res.end(JSON.stringify(data));

    console.log(URL.parse(req.url, true).query);
//desestruturação da url para identificação dos parametros da query
    const { name, url, del } = URL.parse(req.url, true).query;

//Se não tiver name e url, retonar show
    if(!name || !url)
        return res.end('show');
// se tiver o terceiro parametro del, retornar delete    
    if(del)
        return res.end('delete');
// se tiver name, url, retorna create.
    return res.end('create');

}).listen(3000, () => console.log('API is running.'))