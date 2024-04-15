const form = document.getElementById('formForDevs');
form.addEventListener('submit', function(ev){
        ev.preventDefault()
    });
 
const buttonNewTech = document.getElementById('newTech')
    .addEventListener('click', newTechnology);

const bntCadastro = document.getElementById('bntCadastro')
    .addEventListener('click', cadastro);

let i = 0;

function newTechnology(ev) {
    ev.preventDefault();
    i++;
    const addNewTechnology = document.querySelector('#forNewTechs');
    const elementoArticle = document.createElement("article");
    elementoArticle.id = `tech-${i}`;
    const  cardTech =
    `
    
        <div >
            <br/>
            <label for="newTech-${i}">Tecnologia: </label> 
            <input type="text" id="newTech-${i}" name="technology">

            <br/>

            <input type="radio" id="experiencia1-${i}" name="experiencia-${i}" value="0 - 2 anos">
            <label for="experiencia1-${i}"> 0 - 2 anos </label> 

            <input type="radio" id="experiencia2-${i}" name="experiencia-${i}" value="3 - 4 anos">
            <label for="experiencia2-${i}"> 3 - 4 anos </label> 

            <input type="radio" id="experiencia3-${i}" name="experiencia-${i}" value="5+ anos">
            <label for="experiencia3-${i}"> 5+ anos </label> 

        </div>   
        <button id="removerTech-${i}">Remover</button>       
    
    `
    elementoArticle.innerHTML = cardTech;
    addNewTechnology.appendChild(elementoArticle);
   
    document.getElementById(`removerTech-${i}`).addEventListener('click', function(ev){

        idRemovedor = ev.currentTarget.parentNode.id;
        removerTecnologia(idRemovedor); 
    })
}
    
function removerTecnologia(idRemovedor) { 

    const elemento = document.getElementById(idRemovedor);
    if (elemento){
        elemento.parentNode.removeChild(elemento)
    }else {
        console.error("Elemento não encontrado com o ID: " + id);
    }
}

var devsCadastrados = [];

// 1. Criar uma funçãp separada para a criação de obejtos;
// 2. Remover os os campos de tecnologias adicionados no formulario depois que cadastrar;

function cadastro () {
     let devInfo= {
        nome: "",
        tecnologias: [   
        ],  
    };
    
    let devNome = document.getElementById('nameDev').value;
    devInfo.nome = devNome
    articlesTest = document.querySelectorAll('article').length;
    j=0;

    for (i=1; i<=articlesTest; i++ ){

        if (!devInfo.tecnologias[j]){
            devInfo.tecnologias[j]= {};
        }
        let tecnologiasDoDev = document.getElementById(`newTech-${i}`).value;
        
        devInfo.tecnologias[j].tech = tecnologiasDoDev;
        
        let experiênciaComTecnologias = document.querySelector(`input[name="experiencia-${i}"]:checked`);
        let tempoDeXpDasTecs = experiênciaComTecnologias.value;
        
        devInfo.tecnologias[j].tempo = tempoDeXpDasTecs;
        j++
        
    }
    devsCadastrados.push(devInfo);
    document.getElementById('nameDev').value ='';
    
    console.log(devsCadastrados);

   

    //const nomeDev = document.querySelector('#nameDev').value;
    //const allTechs = document.querySelector(`#newTech-${i}`).value;
    
    //console.log(devTecnologiasTeste);

}