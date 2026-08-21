// É uma estrutura do javascript para se trabalhar com todo tipo de lista.
// Seus elementos indentificados por um indice inteiro começando pelo 0.
// Pode armazenar qualquer tipo de dado e ter qualquer tamanho.
// POde ser criado e utilizado através de colchetes:
let array = [];
let array_2 = [1, 2, 3, 4];
// Acima são doi arrays diferentes que foram criados, você pode acessar e seus valores e atribuir novos valores, fazendo uma referência ao indice desejado:
array[0] = 'Olá'; // cria uma referência ao indice 0 e atribui o valor.
array_2[1] = 42; // cria uam referência ao indice 1 e atualiza o valor.

let novo_array = array_2; // não cria um novo array como sendo uma cópia, novo_array é uma referência que aponta para array_2, assim se alterar algum valor de novo_array o array_2 receberá as alterações.
console.log(novo_array);

const lista_de_compras = ["Macarrão"];
console.log(lista_de_compras);

lista_de_compras[0] = "Arroz"; // alterou o valor referênciado pelo indice 0
lista_de_compras[1] = "Feijão"; // atribuiu novo valor ao array
lista_de_compras[2] = 7;
lista_de_compras[5] = "Batata";

console.log(lista_de_compras);

// o javascript permite referencia um indice que não existe no array, mas por não haver valor ele retorna undefined
console.log(lista_de_compras[10]);

lista_de_compras[12] = "Torrada";

// note que ao atribuir valor a um indice maior, é criado campos vazios no array para chegar ao indice informado.
console.log(lista_de_compras)