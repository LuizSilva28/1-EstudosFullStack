let citacao00 = document.getElementByIdif ('citacao00');

let dataCitacao = citacao00.querySelector('h2');

let textoCitacao = citacao00.querySelector('blockquote');

let autoriaCitacao = citacao00.querySelector('span');

let aviso = document.querySelector('#aviso');

let divBaixar = document.querySelector('#divBaixar');


function criarCitacao() {
   let dataInput = document.querySelector('#data').value;
   
   let citacao = document.querySelector('#citacao').value;
   
   let autoria = document.querySelector('#citacao').value;
   
   let data = new Date(dateInput)
   
   let dataFormatada = data.toLocaleString('pt-br'{timeZone:'UTC'});
   
   // Validação simples 
   
   if (data = '' || citacao = '' || autoria = '' ) {
      abrirModal()
      
   } else {
      criarMensagem(dataFormatada, ciatacao, autoria);
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
   
   dowload();
}

function dowload() {
   html2canvas(citacao00).then(canvas => {
      document.body.appendChild(canvas)
   });
   
   let aviso2 = document.querySelector('#aviso2');
   aviso2.textContent = 'Click com o botão direito para Salvar a imagem como...'
}

const btnLimpar = document.querySelector('#bntLimpar');

bntLimpar.addEventListener('click', () => {
   document.location.reload();
   window.scroll(0,0);
})
