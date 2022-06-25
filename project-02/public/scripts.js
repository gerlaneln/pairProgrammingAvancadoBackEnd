/*
Estabelecer o relacionamento com os elementos HTML da página index.html.    
*/
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

function addElement({ name, url }) {
    const list = [];
    const item = {
        nome: name,
        url: url
    }
    console.log(item);
    list.push(item);
    console.log(list);
}

function removeElement(element) {
    //...
}

form.addEventListener('submit', (event) => {
    /*
    O elemento preventDefault() pausa o eventlooping  para que ação do evento submit seja executada.
    */
    event.preventDefault();

    addElement('Gerlâne', 'URL');

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

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.');
    /*
    Se os valores seguirem o formato estabelecido, o elemento é adicionado e o campo é esvaziado.
    */
    addElement({ name, url });

    input.value = '';
})