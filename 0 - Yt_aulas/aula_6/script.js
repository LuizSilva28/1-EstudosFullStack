window.onload = function () {
   console.log('Frase carregada a partir do evento onload da js. \n O evento onload só é carregado depois que o documento da página é carregado, o meu script está no head sendo assim o js é carregado primeiro, note que o valor null acima é dado por este fato, mas os elementos dentro do evento onload aparecem normalmente isso porque o onload é carregado depois do documento da pagina ');
   
   var title2 = document.getElementById('title2');
   
   console.log(title2);
}


var title = document.getElementById('title');

console.log(title);