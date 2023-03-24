

window.onload = () => {                                  //A função será chamada quando a página carrega completamente
    const estados = document.getElementById("estados");  //Nó do DOM
    let opt = document.createElement('option');          //Criar elemento
    opt.value = "";                                      //Definir o valor do elemento
    opt.innerHTML = "Selecione...";                      //Escrever na página
    estados.appendChild(opt);                            //Inserir o elemento dentro do nó 'estados'
    //--------------------------------------------------

    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
    fetch(url)
        .then(response => response.json())                       //transformar o dado em json
        .then(dados => dados.forEach((item) => {
            let opt = document.createElement('option');          //Criar elemento
            opt.value = item.id;                                 //Definir o valor do elemento
            opt.innerHTML = `${item.sigla} - ${item.nome}`       //Escrever na página
            estados.appendChild(opt);
        }))
}
//--------------------------------------------------------------
//variáveis
const itemPorPagina = 4;
let paginaAtual = 0;
let listaMunicipios = [];

document.getElementById('estados').onchange = (event) => {           //event == item que foi selecionado
    let paginaAtual = 0;                                             //resertar o número de páginas
    let listaMunicipios = [];                                        //resertar a váriavel 'listaMunicipios
    //------------------------------------------------------------
    const estados = event.target;                                   //?????
    const id = estados.value;                                       //variável com o id dos estados, eu acho

    if (id !== "") {                                               
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
        fetch(url)
            .then(response => response.json())                      //transformar o dado em json
            .then(data => mostraDados(data));                       //Função criada por min para mostrar dados
    }
};


//-----------------------------------------------------------------------------------------------
const mostraDados = (data = listaMunicipios) => {                                                   //Acessar a API
    
    const municipios = document.getElementById('municipios');                                       //Nó do DOM
    municipios.innerHTML = "";                                                                      //resertar o conteúdo da tag que possui o id 'municipios'                                                         
    listaMunicipios = data;                                                                         //salavando os dados da fetch da funcão de cima na variável 'listaMunicipios'
    const index = paginaAtual * itemPorPagina;                                                      //index referente aos elementos da tag que contem a classe item
    const dadosPagina = listaMunicipios.slice(index, index + itemPorPagina);                        //divide os itens da 'listaMunicipios' na quantidade de itens desejada 'itemPorpágina
    const quantidadePaginas = Math.ceil(listaMunicipios.length / itemPorPagina);                    //número de páginas

    //--------------------------------------------------------------------------------------------
    dadosPagina.forEach(municipio => {
        municipios.innerHTML += `                                                                   
            <div class='item'>
                <h4>${municipio.nome}</h4>
                <p>${municipio.microrregiao.nome} - ${municipio.microrregiao.mesorregiao.nome}</p>
            </div>
        `
    });

    const anterior = `<input type='button'  value='< Anterior' onclick='voltar()' />`
    const proximo = `<input type='button'  value='Próximo >' onclick='prosseguir()' />`
    municipios.innerHTML += `<br> ${anterior} ${paginaAtual + 1}/${quantidadePaginas} ${proximo} </br>`
}

const voltar = () => {                      //função para decrementar o número de páginas
    paginaAtual--;                          //descrementa
    if (paginaAtual < 0) {                  //não permite decrementar a baixo do 0
        paginaAtual = 0;
    }

    mostraDados();                          //chamar a função
}

const prosseguir = () => {                                                             //função para incrementar o número de páginas
    paginaAtual++;                                                                     //incrementa
    const quantidadePaginas = Math.ceil(listaMunicipios.length / itemPorPagina);       //quantidade de paginas

    if (paginaAtual >= quantidadePaginas) {                                            //não permite incrementar a cima do maximo de páginas
        paginaAtual = quantidadePaginas - 1;
    }

    mostraDados();                                                                      //chamar a função
}