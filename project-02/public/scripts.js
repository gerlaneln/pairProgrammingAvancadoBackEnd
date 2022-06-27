/*
Estabelecer o relacionamento com os elementos HTML da página index.html.    
*/
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

function addElement({ name, url }) {
    const list = [];
    const link = {
        nome: name,
        url: url
    }
    /*
    Adiciona o link na lista que controla os elementos li na página index.html.
    Dentro da função map, transforma cada item da lista em formato JSON, para que seja inserido
    no elemento li de forma separada.
    */
    list.push(link);
    list.map(function(item){
        JSON.stringify(item);
        let li = document.createElement('li');
        li.appendChild(document.createElement('li')).textContent = `Nome: ${item.nome} - URL: ${item.url}`;
        ul.appendChild(li);
    });
}

function removeElement(element) {
    //...
}

form.addEventListener('submit', (event) => {
    /*
    O elemento preventDefault() pausa o eventlooping  para que ação do evento submit seja executada.
    */
    event.preventDefault();

    let { value } = input;

    /*
    Verifica se o campo de input está vazio.
    */
    if (!value) 
        return alert('Preencha o campo!');

    /*
    Faz o slipt dos dados do campo, separando os dados e os alocando para as suas respectivas variáveis.
    */
    const [name, url] = value.split(',');

    /*
    Validação da URL inserida, se ela foi inserida e se está no formato padrão.
    */
    if (!url) 
        return alert('O texto não está formatado da maneira correta.');
    
    // Antes !/^http/, não estava funcionando
    //Expressão REGEX: testa se a string não começa com http
        //^ No inicio buca a ?! negação, .* da combinação de qualquer caracter entre 0-ilimitadas vezes
    if (/^(?!.*http)/.test(url)) 
        return alert('Digite a url da maneira correta.');
    /*
    Se os valores seguirem o formato estabelecido, o elemento é adicionado e o campo é esvaziado.
    */
    addElement({ name, url });

    input.value = '';
})