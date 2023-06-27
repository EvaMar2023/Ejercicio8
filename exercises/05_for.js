/* revisado evan*/
function ejercicio5a(){
    const palabras = ["um", "dois", "treis", "quatro", "cinco"];
    for(var i=0; i<5 ;i++){
        alert("La variable número "+ i + " contiene el valor "+palabras[i]);
    }
}

function ejercicio5b(){
    const palabras = ["um", "dois", "treis", "quatro", "cinco"];
    for(const i of palabras){
        alert(i[0].toLocaleUpperCase()+i.substring(1));
    }
}

function ejercicio5c(){
    const unArray = [];
    for (let i = 0; i < 10; i++) {
        unArray[i] = i;
        alert(i);
    }
}