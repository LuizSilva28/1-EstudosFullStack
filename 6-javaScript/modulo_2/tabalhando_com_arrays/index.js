const arr = ["Frodo", "Sam", "Marry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//  Adiciona um valor ao final do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//  Adiciona um valor no inicio do array
tamanho = arr.unshift("Boromir");
console.log(arr)
console.log(tamanho)


//  Remove um valor no final do array
const ultimo_element = arr.pop();
console.log(arr)
console.log(ultimo_element)

//  Remove um valor no inicio do array
const primeiro_element = arr.shift();
console.log(arr)
console.log(primeiro_element)

// pesquisa por um elemento no array
const inclui = arr.includes("Gandalf")
console.log(inclui);


// cortar e concatenar
// slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr)
console.log(hobbits)
console.log(outros);

// Cocatenar, juntar dois array método concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade);

// indexOf busca pelo indice de um elemento;
const indice = arr.indexOf("Gandalf")
console.log(indice);


const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, O Cinzento")
console.log(elementosRemovidos);
console.log(sociedade);