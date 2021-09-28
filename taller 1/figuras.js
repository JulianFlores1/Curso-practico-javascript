//Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}



function  areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();



console.groupEnd();

//Codigo del circulo

console.group("Circulos");


function diametroCirculo(radio){
    return radio * 2;
}

const PI= Math.PI;

function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
     return diametro * PI;
} 

function areaCirculo(radio){
   return (radio * radio) * PI;
} 


//Aqui interactuamos con el HTML:

//CUADRADO:

function calcularAreaCuadrado(){
    const  input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    result.innerText = `El área es ${area}`;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const result = document.getElementById("resultCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    result.innerText = `El perímetro es ${perimetro}`;

}

//CIRCULO

function calcularAreaCirculo(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirculo");
    const value = input.value;


    const area = areaCirculo(value);
    result.innerText = `El área del circulo es: ${area}`
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirculo");
    const value = input.value;
    

    const circunferencia = perimetroCirculo(value);
    result.innerText = `El perimetro del circulo es: ${circunferencia}`
}


function calcularDiametroCirculo(){
    const input = document.getElementById("radioCirculo");
    const result = document.getElementById("resultCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    result.innerText = `El diametro del circulo es: ${diametro}`
}


//triangulo


 
function formulaAreaTriangulo(altura, base){
    return (base * altura) / 2
}

function formulaPerimetroTriangulo(ladoA, ladoB, base){
    return Number.parseInt(ladoA) +  Number.parseInt(ladoB) + Number.parseInt(base);
}

function calcularAlturaTriangulo(ladoA, ladoB, base){
    if(ladoA === ladoB){
        return Math.sqrt((ladoA * ladoA) - ((base / 2) * (base / 2)))
    } else{
        return (ladoA * ladoB) / base
    }
}

function calcularAreaTriangulo(){
    const result = document.getElementById("resultTriangulo");

    let ladoA = document.getElementById("ladoATriangulo");
    let ladoAValue = ladoA.value;
    let ladoB = document.getElementById("ladoBTriangulo");
    let ladoBValue = ladoB.value;
    let base = document.getElementById("baseTriangulo");
    let baseValue = base.value;

    let altura = calcularAlturaTriangulo(ladoAValue, ladoBValue, baseValue);
    let area = formulaAreaTriangulo(altura, baseValue);
    
    result.innerText = `El área del triangulo es ${area}`
    
}

function calcularPerimetroTriangulo(){
    const result = document.getElementById("resultTriangulo");
    let ladoA = document.getElementById("ladoATriangulo");
    let ladoAValue = ladoA.value;
    let ladoB = document.getElementById("ladoBTriangulo");
    let ladoBValue = ladoB.value;
    let base = document.getElementById("baseTriangulo");
    let baseValue = base.value;

    let perimetro = formulaPerimetroTriangulo(ladoAValue, ladoBValue, baseValue);
    
    result.innerText = `El perímetro del triangulo es ${perimetro}`
    
}




console.groupEnd();
