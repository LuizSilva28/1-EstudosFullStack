const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'Olá, mundo': '';

    console.log(input.value);
    console.log(input.grtAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio'? 'radio': 'text';
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = input.placeholder === ''? 'Digite seu nome': '';
})

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  console.log("O valor do atributo data-something-else é: " + data)
  input.dataset.somethingElse = 'Algum outro valor'
  console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})