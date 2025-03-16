// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array o vector para almacenar el nombre de los amigos
let amigosListados = [];

// hacemos referencia al botón y el ícono del sorteo
const botonSorteo = document.querySelector('.button-draw');
let iconoSorteo = botonSorteo.querySelector('img');

//a continuación mostramos las funciones:

// -Función para agregar amigos a nuestra lista:
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validamos para asegurarnos de que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Los espacios en blanco no están permitidos :(')
        alert('Por favor, ingresa el nombre de un amigo :D');
        return;
    }

    // Agregar el nombre del amigo ingreasdo
    amigosListados.push(nombreAmigo);

    // Actualizamos lo visible por el usuario
    actualizarListaDeAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para poder actualizar la lista de los nombres de los amigos en la interfaz
function actualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigosListados.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para seleccionar amigo de manera aleatoria
function realizarSorteo() {
    // Si el sorteo ya se realizó --> reiniciamos
    if (botonSorteo.dataset.estado === "reiniciar") {
        reiniciarSorteo();
        return;
    }

    // Verificamos si hay nombres en la lista antes de continuar
    if (amigosListados.length === 0) {
        alert('No hay amigos para sortear, por favor añada algunos nombres!');
        return;
    }

    // Obtenemos un índice aleatorio dentro del rango del array de amigos (lo del Math.random me parece genial)
    const indiceAleatorio = parseInt(Math.floor(Math.random() * amigosListados.length)+0);
    const amigoSorteado = amigosListados[indiceAleatorio];

    // Mostramos el resultado obtenido en el sorteo
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Cambiamos el estado y texto del botón para poder reiniciar el sorteo
    iconoSorteo.src = "assets/icono-reiniciar.png";
    botonSorteo.innerHTML = "Reiniciar sorteo";
    botonSorteo.dataset.estado = "reiniciar";
}

// Función para reiniciar el sorteo y limpiar la lista de amigos
function reiniciarSorteo() {
    // Limpiamos el array con los nombres de los amigos
    amigosListados = [];

    // Limpiamos la lista y el resultado del sorteo
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    // Restablecemos el botón a su estado originla
    iconoSorteo.src = "assets/play_circle_outline.png";
    botonSorteo.innerHTML = "Sortear amigo";
    botonSorteo.dataset.estado = "sortear";
}






