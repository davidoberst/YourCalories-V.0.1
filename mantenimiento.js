function  calcular() {

    console.log("console funciona");


const peso =  (document.getElementById("peso").value);
const actividad = (document.getElementById("actividad").value);

if (isNaN(peso) || peso <= 0) {
    alert("Por favor, ingresa un peso válido.");
    return;
  }

let factorActividad;
switch (actividad){


case "sedentario":
    factorActividad = 1.22;
    break;

case "moderado":
    factorActividad =1.375;
    break;

case "activo":
    factorActividad = 1.55;
    break;

case "muyactivo":
    factorActividad = 1.75;
    break;

default:
 alert("Selecciona una actividad válida.");
 return;
}

 let resultado = (peso * 22 *factorActividad)+ 100 ;
 let resultado2 = (peso * 22 *factorActividad) ;
 resultado = Math.floor(resultado);
 resultado2 = Math.floor(resultado2);

 document.getElementById("resultado").innerHTML = "Debes consumir entre " + resultado2 + " a " + resultado + " calorias al dia"; 

 document.getElementById("resultado").scrollIntoView({
    behavior: "smooth",  
    block: "start"      
});

}