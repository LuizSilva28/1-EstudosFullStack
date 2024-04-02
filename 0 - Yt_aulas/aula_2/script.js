/*let citacao00 = document.getElementById('citacao00');

let dataCitacao = citacao00.querySelector('h2');

let textoCitacao = citacao00.querySelector('blockquote');

let autoriaCitacao = citacao00.querySelector('span');

let aviso = document.querySelector('#aviso');

let divBaixar = document.querySelector('#divBaixar');


function criarCitacao() {
   let dataInput = document.querySelector('#data').value;
   
   let citacao = document.querySelector('#citacao').value;
   
   let autoria = document.querySelector('#citacao').value;
   
   let data = new Date(dataInput)
   
   let dataFormatada = data.toLocaleString('pt-br', {timeZone:'UTC'});
   
   // Validação simples 
   
   if (data == '' || citacao == '' || autoria == '' ) {
      abrirModal()
      
   } else {
      criarMensagem(dataFormatada, citacao, autoria);
      window.scroll(0,670)
   }
   
}

function abrirModal() {
   location.href='#abrirModal';
}

function criarMensagem(data, citacao, autoria) {
   
   dataCitacao.textContent = data;
   textoCitacao.textContent = citacao;
   autoriaCitacao.textContent = autoria;
   
   download();
}

function download() {
   html2canvas(citacao00).then(canvas => {
      document.body.appendChild(canvas)
   });
  

   
   let aviso2 = document.querySelector('#aviso2');
   aviso2.textContent = 'Click com o botão direito para Salvar a imagem como...'
}

const btnLimpar = document.querySelector('#bntLimpar');

btnLimpar.addEventListener('click', () => {
   document.location.reload();
   window.scroll(0,0);
})*/



let citacao00      = document.querySelector('#citacao00')
let dataCitacao    = citacao00.querySelector('h2')
let textoCitacao   = citacao00.querySelector('blockquote')
let autoriaCitacao = citacao00.querySelector('span')

let aviso = document.querySelector('#aviso')
let divBaixar = document.querySelector('#divBaixar')

function criarCitacao() {
    let dataInput = document.querySelector('#data').value
    let citacao   = document.querySelector('#citacao').value
    let autoria   = document.querySelector('#autoria').value

    let data = new Date(dataInput)
    let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    // validacao simples
    if (data == '' || citacao == '' || autoria == '')  {
        abrirModal()
    } else {
        criarMensagem(dataFormatada, citacao, autoria)
        window.scroll(0,670)
    }

}

function abrirModal() {
    location.href="#abrirModal"
}

function gerarNumero() {  
   
   var numeroAleatorio = Math.random() * 5;  
   
   numeroAleatorio = Math.floor(numeroAleatorio); 
   
   console.log(numeroAleatorio);
   
   return numeroAleatorio;
   
   
}
 
 
function criarMensagem(data, citacao, autoria) {
   
    dataCitacao.textContent    = data
    textoCitacao.textContent   = citacao
    autoriaCitacao.textContent = autoria
    
    let numeroGerado = gerarNumero();
    
    let conteudoArticle = document.getElementById('citacao00');
   
   conteudoArticle.classList = ( `fundo${numeroGerado}`, 'citacao')
   



    download()
}

function download() {
    html2canvas(citacao00).then(canvas => {
        document.body.appendChild(canvas)
    })

    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = "Clique com o botão direito e escolha Salvar imagem como..."
}

const btnLimpar = document.querySelector('#btnLimpar')

btnLimpar.addEventListener('click', () => {
    document.location.reload()
    window.scroll(0,0)
})
