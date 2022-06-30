/*
Estabelecer o relacionamento com os elementos HTML da página index.html.    
*/
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

/*
Função addElement usa os elementos digitados pelo usuário para criar um lista, acrescentando um botão para remoção dos nós desejados.
*/
function addElement({ name, url }) { 
    let li = document.createElement('li');
    li.innerHTML = `Nome: ${name} - URL: <a href="${url}">${url}
    </a> <button class="remove" onclick="removeElement(this)">&#9747;</button>`;
    ul.appendChild(li);
}

function removeElement(element) {
    if(confirm("Tem certeza que seja apagar?"))
        element.parentNode.parentNode.remove();
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