let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* Esta puede ser la forma clásica de dale función a un input
function verificarIntento() {
    let numeroDeUsuario = document.querySelector('input');
    return;
}
*/
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); //=== igual en valor y tipo de dato
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('H1', 'Juego del Número Secreto')
asignarTextoElemento('p','Indica un número entre 1 y 10')