function jugarAdivinanza() {  //Se determina una función script. Es un juego de adivinanza con una longitud de 50 probabilidades y 25 intentos en el que tenemos que adivinar un número.
    const minNumero = 0;
    const maxNumero = 50;
    const maxIntentos = 25;  // Limitado a 25 intentos
    
    
    let intentos = 0;
    const numeroCorrecto = Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero; //Función matemática de lógica; determina que cada vez se reinicie el juego, el número a adivinar cambiará.

    while (intentos < maxIntentos) {       // Utilizacion de ciclo While. Inicia el script por medio de un prompt. Previo se determinan las variables const para el cumplimiento de ciertas condiciones.
        //Si no se adivina el número, se activan alerts dándonos pistas de acercamiento al valor real randomizado.
        let numero = prompt(`Adivina el número del ${minNumero} al ${maxNumero} en ${maxIntentos} intentos:`); 
        console.log("Número ingresado:", numero);
        numero = parseInt(numero);
        //Condiciones anidadas If y Else. Se determinan las condiciones de todo el script. 
        if (isNaN(numero) || numero < minNumero || numero > maxNumero) {
            alert(`Por favor ingresa un número válido del ${minNumero} al ${maxNumero}.`);
            continue; 
        }
        
        intentos++;

        if (numero === numeroCorrecto) {
            alert(`¡Felicitaciones! Adivinaste el número ${numeroCorrecto} en ${intentos} intentos.`);
            console.log("Adivinaste el número correctamente.");
            window.location.href = 'pages/Sorteo.html';
            return; 
        } else {
            let distancia = Math.abs(numero - numeroCorrecto);
            console.log("Distancia al número correcto:", distancia);

            if (distancia <= 1) {
                alert("¡Estás ahí nomás!");
            } else if (distancia <= 5) {
                alert("Estás cerquita.");
            } else if (distancia <= 10) {
                alert("Estás cerca.");
            } else {
                alert("Estás lejos.");
            }
        }
    }

    alert(`¡Uy, lo sentimos! Ya agotaste la cantidad de intentos. ¡Más suerte para la próxima! El número correcto era ${numeroCorrecto}.`);
    console.log("Se agotaron los intentos.");
    window.location.href = 'pages/perdiste.html';
}

jugarAdivinanza();


