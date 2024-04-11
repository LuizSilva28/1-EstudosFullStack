

//toUpperCase e toLowerCase

var frase = "Esta é a frase que vamos manipular";
console.log(frase.toLowerCase());

var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);

//trim

var nome = '     Juliana     ';
console.log(nome);

var nomeTrim = nome.trim();
console.log(nomeTrim);

//split

console.log (frase.split(" "));

var tags = 'PHP, JavaScript, Ract, Node, Html';

console.log(tags.split(','))

//lastIndexOf


var fraseTeste = "Eu quero a última frase de teste desta frase de teste ";

console.log(fraseTeste.indexOf('teste'))

console.log(fraseTeste.lastIndexOf('teste'));