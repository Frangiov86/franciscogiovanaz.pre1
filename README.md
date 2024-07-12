Implementa un juego de adivinanza en el que el jugador tiene 25 intentos para adivinar un número entre 0 y 50.

Se detalla a continuación la composición del script y sus características.

Constantes y variables:

minNumero y maxNumero establecen el rango de números a adivinar.
maxIntentos limita la cantidad de intentos del jugador.
intentos lleva la cuenta de los intentos realizados.
numeroCorrecto es el número aleatorio generado que el jugador debe adivinar.

El bucle continúa ejecutándose mientras el número de intentos sea menor que maxIntentos.

Se solicita al usuario que ingrese un número mediante un prompt, y se convierte a un número entero con parseInt.

Si la entrada no es un número válido o está fuera del rango permitido, se muestra una alerta y el ciclo continúa.

Incremento del contador de intentos: en cada intento se va sumando hasta adivinar el número

Si el número ingresado es correcto, se muestra un mensaje de felicitación y redirige a una página de éxito.
Si el número es incorrecto, se calcula la distancia al número correcto y se proporciona retroalimentación al usuario sobre qué tan cerca está de adivinar correctamente.

Si el jugador agota todos los intentos sin adivinar el número, se muestra un mensaje de fin de juego y redirige a una página de pérdida.

Resumen:

Inicio del juego: Se genera un número aleatorio entre 0 y 50.

Interacción del usuario: El usuario intenta adivinar el número mediante una serie de entradas en un prompt.

Retroalimentación: Dependiendo de la proximidad del número ingresado al número correcto, el usuario recibe mensajes que indican si está cerca o lejos del número objetivo.

Final del juego: El juego termina cuando el usuario adivina el número correcto o se agotan los intentos, mostrando mensajes y redirigiendo a páginas correspondientes según el resultado.



