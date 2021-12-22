 function sortin(){
 respuesta=parseInt(prompt("Ingresa un numero"));

     if 
    (respuesta < 6 && respuesta >= 0) {
       console.log("Failed");
    }else if  
    
    (respuesta > 6 && respuesta <= 9) {
        console.log("Insufficient");
    }else if 
    (respuesta > 9 || respuesta <= 14) {
        console.log("Good");
    }else if 
    (respuesta == 15) {
        console.log("Good");
    }else if
         (respuesta < 0 || respuesta > 15) {
            console.log("Error, outside of bounds");
    }}
 sortin ();