(function (numero1,numero2){
    console.log("Numero 1: "+numero1+" \nNumero 2: "+numero2);
    valor1 = numero1 + numero2;
    valor2 = numero1 * numero2;
    valor3 = numero1 - numero2;
    valor4 = numero1 / numero2;
    valor5 = numero1 % numero2;
    n1 = numero1;
    n1++;
    n2 = numero1;
    n2--;

    console.log("Suma: "+valor1);
    console.log("Multiplicación: "+valor2);
    console.log("Resta: "+valor3);
    console.log("División: "+valor4);
    console.log("Resto al cuadrado: "+valor5*valor5)
    console.log("Incremento numero 1: "+n1);
    console.log("Decremento numero 1: "+n2);
    n1 = numero2;
    n1++;
    n2 = numero2;
    n2--;
    console.log("Incremento numero 2: "+n1);
    console.log("Decremento numero 2: "+n2);
})(10,7);