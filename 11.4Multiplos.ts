import * as rls from "readline-sync";



let esMultiplo = function(){
    let Num1: number =  rls.questionInt("ingrese N1: ");
    let Num2: number =  rls.questionInt("ingrese N2: ");
    let resultado: number = Num1 % Num2;
    let booleano: boolean = resultado == 0;
    return(booleano);
} 
console.log(esMultiplo());

let esMultiplo2 = function(Num1: number,Num2: number){
    let resultado: number = Num1 % Num2;
    let booleano: boolean = resultado == 0;
    return(booleano);
} 

console.log(esMultiplo2(4,4));

