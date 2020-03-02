// Rompecabezas deslizante
// El juego consiste en un tablero de 4x4, donde cada casilla tiene un número(del 1 al 15) excepto por una que en vez de casilla hay una espacio.
// Los números y el espacio vacío comienzan en posiciones aleatorias
// El objetivo del juego es ir moviendo las casillas(gracias al espacio vacío, hasta ordenar todos los números de menor a mayor(el 1 tiene que estar arriba a la izquierda y el espacio vacío abajo a la derecha).
// Los movimientos posibles son ARRIBA, ABAJO, IZQUIERDA, DERECHA.
// Cuando se mueve, se intercambia el espacio vacío por la casilla siguiente en dicha dirección.
// No se puede avaznzan contra bordes.
// Poner una condición de escape("SALIR") para salir del juego.
// Cuando se gana, preguntar si quiere reiniciar el juego y seguir jugando
// 2  14 3  4
// 5  1  7  13
// 4  10 11 12
// 8  9 * 15

// // Ingrese un movimiento: ARRIBA

// 2  14 3  4
// 5  1  7  13
// 4  10 * 12
// 8  9  11 15

// // Ingrese un movimiento: IZQUIERDA

// 2  14 3  4
// 5  1  7  13
// 4 * 10 12
// 8  9  11 15

// // Ejemplo victoria

// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 *


// Rompecabezas deslizante
// El juego consiste en un tablero de 4x4, donde cada casilla tiene un número(del 1 al 15) excepto por una que en vez de casilla hay una espacio.
// Los números y el espacio vacío comienzan en posiciones aleatorias
// El objetivo del juego es ir moviendo las casillas(gracias al espacio vacío, hasta ordenar todos los números de menor a mayor(el 1 tiene que estar arriba a la izquierda y el espacio vacío abajo a la derecha).
// Los movimientos posibles son ARRIBA, ABAJO, IZQUIERDA, DERECHA.
// Cuando se mueve, se intercambia el espacio vacío por la casilla siguiente en dicha dirección.
// No se puede avaznzan contra bordes.
// Poner una condición de escape("SALIR") para salir del juego.
// Cuando se gana, preguntar si quiere reiniciar el juego y seguir jugando

//===========================//
///// ==== FUNCIONES ===== ////
//===========================//

// creo una funcion para mezclar un array de elementos
const mezclarArray = (array) => {
    let arrayMezclado = array;

    for (let i = arrayMezclado.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i));
        let temp = arrayMezclado[i];
        arrayMezclado[i] = arrayMezclado[j];
        arrayMezclado[j] = temp;
    }

    return arrayMezclado // devuelve el array con sus elementos mezclados
}


// Creo función para mostrar un tablero en base a un array 2D
const imprimirArray2D = (array2D) => {

    let tableroFinal = ""
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            tableroFinal += array2D[i][j] + " ";

        }
        tableroFinal += "\n"
    }

    return tableroFinal; /// devuelve un string del tableroJuego

}

// Crear un array2D con filas de 4 elementos, en base a un array unidimensional
const crearArray2D = array => {
    let arr = array;
    let tablero = [];
    // recorro el array de base para armar un array2d
    for (let i = 0; i < arr.length; i += 4) {
        const fila = arr.slice(i, i + 4);
        tablero.push(fila);
    }
    // imprimo el array2D
    return tablero;
}


// creo función para definir la ubicación de la bola blanca
const encontrarElemento = (array2D, elemento) => {
    let coordenadas = [];
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            if (array2D[i][j] === elemento) {
                coordenadas[0] = i;
                coordenadas[1] = j;
            }
        }
    }
    return coordenadas
}


// creo función para mover una ficha, de acuerdo a un movimiento ingresado
const moverElemento = (array2D, elemento, movimiento) => {
    let coordenadas = encontrarElemento(array2D, elemento);
    let tablero = array2D;

    switch (movimiento) {
        case "A":
        case "ARRIBA":
            if (coordenadas[0] !== 0) {
                tablero[coordenadas[0]][coordenadas[1]] = tablero[coordenadas[0] - 1][coordenadas[1]];
                tablero[coordenadas[0] - 1][coordenadas[1]] = elemento;
            }
            break
        case "J":
        case "ABAJO":
            if (coordenadas[0] !== 3) {
                tablero[coordenadas[0]][coordenadas[1]] = tablero[coordenadas[0] + 1][coordenadas[1]];
                tablero[coordenadas[0] + 1][coordenadas[1]] = elemento;
            }
            break
        case "I":
        case "IZQUIERDA":
            if (coordenadas[1] !== 0) {
                tablero[coordenadas[0]][coordenadas[1]] = tablero[coordenadas[0]][coordenadas[1] - 1];
                tablero[coordenadas[0]][coordenadas[1] - 1] = elemento;
            }
            break
        case "D":
        case "DERECHA":
            if (coordenadas[1] !== 3) {
                tablero[coordenadas[0]][coordenadas[1]] = tablero[coordenadas[0]][coordenadas[1] + 1];
                tablero[coordenadas[0]][coordenadas[1] + 1] = elemento;
            }
            break

        case "S":
        case "SALIR":
            alert("Abandonó la partida");
            break

        default:
            alert("No ingresó un movimiento válido")
            break
    }

    return tablero
}


// Creo una función que chequee la validez del movimiento
const chequearMovimiento = movimiento => {
    let esValido = true;

    switch (movimiento) {
        case "A":
        case "ARRIBA":
        case "J":
        case "ABAJO":
        case "I":
        case "IZQUIERDA":
        case "D":
        case "DERECHA":
        case "S":
        case "SALIR":
            esValido = true;
            break
        default:
            esValido = false;

    }

    return esValido
}


// creo una función que compare un array2D de 4x4 con uno unidimensional de misma cantidad de elementos
const compararArrays = (array2D, arrayUnidimensional) => {
    let sonIguales = true;
    const arrayAnidado = array2D;
    const array2DNuevo = crearArray2D(arrayUnidimensional);

    for (let i = 0; i < arrayAnidado.length; i++) {
        for (let j = 0; j < arrayAnidado[i].length; j++) {
            if (arrayAnidado[i][j] !== array2DNuevo[i][j]) {
                sonIguales = false;
            }
        }
    }
    return sonIguales
}



// creo una función para crear mensaje con el historial global del juego
const obtenerHistorialGlobal = (resultado, numeroPartida) => {
    let historialPartida = "";
    if (resultado === "Completó") {
        historialPartida = `Partida: ${numeroPartida} | Completa
        `;
    } else {
        historialPartida = `Partida: ${numeroPartida} | Renunció
        `;
    }
    return historialPartida
}



//===========================//
///// ==== VARIABLES ===== ////
//===========================//

// Crear un array con tantos elementos como pares máximos se puedan utilizar
const elementos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "⚪"];
const bolaBlanca = "⚪";

// Historial Global
let historialGlobal = "\nHistorial de Jugadas\n------------------\n";
let numeroPartida = 1;

// crear la variable para volver a jugar
let juegoSigue = true;

let mensajeAccion = `
        Elija hacia dónde correr el círculo blanco:
        [A]RRIBA
        ABA[J]O
        [I]ZQUIERDA
        [D]ERECHA
    
        O elija [S]ALIR`


//==========================//
////======= JUEGO ========////
//==========================//

// Inciamos bucle
while (juegoSigue) {

    // creo la variable con las fichas
    let tablero = elementos.slice();

    // mezclo las fichas
    tablero = mezclarArray(tablero);
    // las convierto en array2D
    tablero = crearArray2D(tablero);

    let terminarJuego = false; // comienzo juego

    while (!terminarJuego) {
        // imprimo el tablero actualizado
        const tableroImpreso = imprimirArray2D(tablero);

        // pido al usuario que elija un movimiento
        let movimiento = prompt(tableroImpreso + mensajeAccion);

        // Chequeo si es válido el movimiento
        let esValido = chequearMovimiento(movimiento);

        while (!esValido) {
            movimiento = prompt(tableroImpreso + mensajeAccion);
            esValido = chequearMovimiento(movimiento);
        }

        tablero = moverElemento(tablero, bolaBlanca, movimiento);

        // verificar si termina el juego
        if (movimiento === "S" || movimiento === "SALIR" || compararArrays(tablero, elementos)) {
            terminarJuego = true;
            alert("Fin del juego\n" + imprimirArray2D(tablero))
        }
    }

    // Puede ser que las vueltas sean 0, pero que haya acertado en el último intento.. por eso VERIFICO
    const resultado = compararArrays(tablero, elementos) ? "Completó" : "Abandonó";

    // Actualizo el historial Global de partidas
    historialGlobal += obtenerHistorialGlobal(resultado, numeroPartida);

    // Mensaje para la jugadora con toda la info y preguntar si quiere seguir jugando
    juegoSigue = confirm(`${resultado} esta partida.\n${historialGlobal}
    Desea seguir jugando?`);

    // Sumo un numero de partida
    numeroPartida++;

}

alert("Adios!" + historialGlobal)