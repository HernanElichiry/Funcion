import * as rls from "readline-sync";

let CantidadDeDivisores = function(){
    let Numeros: number = rls.questionInt("Ingrese un numero: ");
    let acumulador: number = 0;
    for(let contador: number = 0; contador <= Numeros;contador ++){
    if(Numeros % contador == 0){
        acumulador = acumulador + 1; 
    }
     
}    return(acumulador);
    } 

    console.log("La cantidad de divisores es:", CantidadDeDivisores());
    