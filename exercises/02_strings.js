/*Ejercicio 02 - Strings - revisado evan*/

function ejercicio2a(){
    let palabra3 = "Tranquilitatis";
    let resultado3 = palabra3.substring(0, 5);
    alert(resultado3);
}

function ejercicio2b(){
    let palabra4 = "Esperidina";
    alert(palabra4.charAt(0).toUpperCase() + palabra4.slice(1));
}

function ejercicio2c(){
    let palabra5 ="Santas Cachuchas";
    let resultado4 = palabra5.indexOf(" ");
    alert("El espacio en blanco se encuentra despues del caracter número: " + resultado4);
}