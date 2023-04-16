import * as rls from "readline-sync";

let Potencia = function(){
    let base: number = rls.questionInt("ingrese base: ");
    let exponente: number = rls.questionInt("ingrese exponente: ");
    while(exponente < 0){
        exponente = rls.questionInt("ingrese un exponente igual o mayor a 0: ");       
    }if (exponente >= 0){
        let resultado: number
        resultado = base ** exponente; 
        return(resultado);
}  
    }
      
  console.log("El resultado es", Potencia());
    
 


