/* ev = evento que foi disparado
   currentTarget = pega o alvo do elemento, 
   ou seja o elemnto que acionou o evento
 */

function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation){
        alert('Usuário ' + username + ' registrado!')
    } else {
        alert('As senhas não conferem!')
    }

}

const button = document.getElementById("register-button")

/*  addEventListener faz com que o elemento 
    escolhido tenha a capacidade de ouvir e reagir eventos
*/
button.addEventListener("click", register)

/*
    removeEventListener = pare remover um evento, o oposto do addEventListener    
*/

function removeListener () {
    button.removeEventListener('click', register)
    alert('Event removed')
}
/*
    mouseover = evento aciona quando passar o cursor por cima do elemento

*/
button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget.parentNode)

})