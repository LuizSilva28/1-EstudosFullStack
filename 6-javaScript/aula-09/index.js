const escalarJogador = document.getElementById("bntEscalar")
escalarJogador.addEventListener("click",  escalar);

const removerJogador = document.getElementById("remover-jogador")
removerJogador.addEventListener("click",  removerJogadorEscalado);



function escalar() {

  const playersEscalados = document.getElementById('playersEscalados');

  const position = document.getElementById('position').value;
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;

  let confirmacao = confirm("Deseja escalar o jogador: " +
  "\n Nome: " + name +
  "\n Camisa: " + number +
  "\n Posição: " + position);

  if (confirmacao){ 

    
    const myLi = document.createElement('li');
    myLi.id = 'jogador-' + number;
    myLi.innerText = `
       Posição do jogador: ${name}
       Nome do jogador:  ${number}
       Número da camiseta ${position} 
      
    `;
 

    
    playersEscalados.appendChild(myLi);

    document.getElementById('position').value = "";
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
  } else{
    return;
  }

}



function removerJogadorEscalado (){
  const number = document.getElementById('numero-camisa').value;
  const  jogadorRemovido = document.getElementById('jogador-' + number);

  let confirmacao = confirm("Deseja remover o jogador: " +
 jogadorRemovido.innerText + "?" )
  
  if (confirmacao){ 
    document.getElementById("playersEscalados").removeChild(jogadorRemovido);
    document.getElementById('numero-camisa').value = '';
  } else{
    return;
  }

}




