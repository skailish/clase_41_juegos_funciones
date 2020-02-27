// Necesitamos 5 colores
// Seleccionar al azar 4 de esos colores, sin repetir
// el jugador ingresa una secuencia de colores
// comparamos la secuencia ingresada con la secuencia aleatoria
// devuelve pistas (bolas negras para posición correcta y blancas color correcto posición incorrecta)
// se guarda el historial en cada vuelta y se muestra
// se sigue jugando hasta terminar las 15 vueltas o hasta adivinar la secuencia



// Crear función que compare ambas secuencias y devuelva un array conteniendo las pistas
const compararSecuencias = (jugada, secuenciaRandom) => {
    const pistas = [];

    for (let i = 0; i < jugada.length; i++) {
        if (jugada[i] === secuenciaRandom[i]) {
            pistas.push("o");
        } else if (secuenciaRandom.includes(jugada[i])) {
            pistas.push("x");
        }

    }

    return pistas.sort();
}

// Crear una función que verifique si todas las pistas son bolas negras
const verificarSiGano = pistas => {
    let aciertos = 0;

    for (let i = 0; i < pistas.length; i++) {
        if (pistas[i] === "o") {
            aciertos++
        }

    }
    return aciertos === 4;
}

// creo función para crear mensaje con historial
const obtenerHistorial = (historialJugadas, historialPistas) => {
    let historial = "";

    for (let i = 0; i < historialJugadas.length; i++) {
        historial += `${historialJugadas[i].join(" ")} / ${historialPistas[i].join(" ")}\n`
    }
    return historial;
}


// Crear una función que selecciones 4 de esos colores al azar
const generarSecuencia = () => {
        
    return ["r", "v", "a", "f"]
}


// Crear un array con 5 colores
const colores = ["r", "v", "a", "f", "m"];
// crear variable colores random
const secuenciaRandom = generarSecuencia();
// Crear variable bandera
let terminarJuego = false;
// crear variable de vueltas
let vueltas = 15;
// historiales
const historialJugadas = [];
const historialPistas = [];



// Inciamos bucle
while (!terminarJuego) {
    // Pedirle al usuario que ingrese su secuencia de colores
    const historial = obtenerHistorial(historialJugadas, historialPistas);
    const jugada = prompt(`${historial} Ingrese una secuencia separada por comas`).split(",");

    // Llamar función que compare
    const pistas = compararSecuencias(jugada, secuenciaRandom);

    // Crear un array 2D pusheando lo ingresado por el usuario y otro array 2D pusheando la pista
    historialJugadas.push(jugada);
    historialPistas.push(pistas);

    // Restarle 1 a las vueltas
    vueltas--;

    // verificar si termina el juego
    if (vueltas === 0 || verificarSiGano(pistas)) {
        terminarJuego = true;
    }
}

// Comparación vueltas === 0, perdió : ganó
const resultado = vueltas > 0 ? "Ganó" : "Perdió";

alert(resultado);