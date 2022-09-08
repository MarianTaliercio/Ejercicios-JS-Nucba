let pizza = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: ["muzzarella", "salsa de tomate", "aceitunas"],
        precio: 500,
    },
    {
        id: 2,
        nombre: "calabresa",
        ingredientes: ["queso", "longaniza", "salsa de tomate"],
        precio: 900,
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["queso", "cebolla", "aceitunas"],
        precio: 750,
    },
    {
        id: 4,
        nombre: "napolitana",
        ingredientes: ["queso", "tomate", "albahaca", "aceite de oliva"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["muzzarella", "parmesano", "roquefort", "robiola"],
        precio: 900,
    },
    {
        id: 6,
        nombre: "argentina",
        ingredientes: ["tomate", "cebolla", "queso"],
        precio: 600,
    },
]


//     Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.



const titulo = document.querySelector(".titulo");
const precio = document.querySelector(".precio");
const form = document.querySelector(".form");
const number = document.querySelector("input");
const submit = document.querySelector(".btn");


let buscador = [];


const ImprimirValor = e => {
    e.preventDefault();

    const imprimirId = number.value;

    if(!imprimirId.length){
        alert("No ingresaste ningun numero")  
        return;
    }else if(
        buscador = pizza.find((pizza) => pizza.id == imprimirId)){ 
            titulo.textContent = `La Pizza ${buscador.nombre}`;
            // titulo.classList.add("titulo");
            precio.textContent = `Su Valor es $${buscador.precio}`;
            // precio.classList.add("precio"); 
            return;
    } else{
        alert("No tenemos esa zapi")  
        return;
    }

    
    
    
    // titulo.textContent = imprimirId;
    // // titulo.style.border= '3px solid green'

}


let imprimirPizza = () => {
    form.addEventListener("submit", ImprimirValor);

    // imprimirPizza.reset();
}


let init = () => {
    imprimirPizza();

}

init();