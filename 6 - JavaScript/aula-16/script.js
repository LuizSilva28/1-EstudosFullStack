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