const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

//Forma tradicional
/*
const name = person.name;
const job = person.job;
*/

//Destructuring
const { job, parents } = person; //pega o que estiver em "job" e atribui a ele a variável "job".

console.log( job, parents);

const [father, mother] = parents;  //Pegando os valores de um array e atribuindo-os a várias variáveis.

console.log( father, mother );

function createUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents,
    }
}