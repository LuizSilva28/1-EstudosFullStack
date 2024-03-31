const form = document.getElementById('orderForm')

    /* submit = para a submição do formulario */

    /* a função abaixo é chamada de função anônima de callback */

    /* querySelector = precisa do . ou # igual no css 
       para a identificação de classe ou id, e também podemos fazer pela 
       representação dos elementos como o caso do input 
       e definir os atributos que quero selecionar
    */
form.addEventListener('submit', function (ev){
    /* 
        preventDefault() = para previnir o comportamento padrão do form 
        e não recarregar a página
    */
ev.preventDefault()

const name = document.querySelector('input[name ="name"]').value
const address = document.querySelector('input[name="address"]').value
const breadType = document.querySelector('select[name="breadType"]').value
const main = document.querySelector('input[name="main"]').value
const observations = document.querySelector('textarea[name="observations"]').value

    /* 
        querySelectAll() = para selecinar todos os elementos que se encaixarem na query
        ex: a querySelectAll() abaixo pega todos os inputs com o name salad
        cujo tenha o seu valor igual a checked

    */
let salad = ''
document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
    salad += ' - ' + item.value + '/n'

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations

    })

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "\nObservações: " + observations
      )
})
})