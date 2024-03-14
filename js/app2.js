// Datos de trabajo

// Esta instruccion sirve para borrar este elemento del local storage
localStorage.removeItem("flores")

// De esta manera al abrir la pagina busca en el localstorage y si no existe utiliza el array dado
const flores = JSON.parse(localStorage.getItem("flores")) || [

    { nombre: "Rosa", color: "rojo", floracion: "primavera", stock: true },
    { nombre: "Rosa", color: "blanco", floracion: "verano", stock: true },
    { nombre: "Jazmín", color: "blanco", floracion: "verano", stock: false },
    { nombre: "Crisantemo", color: "blanco", floracion: "otoño", stock: false },
    { nombre: "Cerezo", color: "blanco", floracion: "primavera", stock: false },
    { nombre: "Clavel", color: "rojo", floracion: "verano", stock: true },

]



/*  Funcion para ordenar listas, la utilizare dentro de la funcion para mostrar las flores en html
flores.sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true })
})
*/

// console.log(flores)

// Ejercicio 1 ==========================================================================================================
// Tiene que mostrarse en el HTML los datos de la flores
// de esta manera:
// como lista
// Flor : rosa, de color rojo, florece en primavera y tenemos stock

/* ===========> Resuelto por mi en clase <==========
function armarLista(array) {

    let divEjercicio1 = document.getElementById("ejercicio1")
    //Funcion para ordenar todas las flores del array
    array.sort(function (a, b) {
        return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true })
    })

    let lista = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].stock) {
            lista.push(`
    <li>Flor : ${array[i].nombre}, de color ${array[i].color}, florece en ${array[i].floracion} y tenemos stock
    `)
        } else {
            lista.push(`
    <li>Flor : ${array[i].nombre}, de color ${array[i].color}, florece en ${array[i].floracion} y no tenemos stock
    `)
        }
    }
    divEjercicio1.innerHTML = `<ul>${lista}</ul>`
}

armarLista(flores)
   ===========> Resuelto por mi en clase <==========
*/

// Opción resuelta por el profe utilizando forEach() y concatenacion de string ======
let ejercicio1 = document.getElementById("ejercicio1")


function armarLista2(array) {

    //Funcion para ordenar todas las flores del array
    array.sort(function (a, b) {
        return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true })
    })

    let html1 = "<ul>"

    flores.forEach((flor) => {
        // Variable agregada para agregar el precio del ejercicio 6
        let precio = ""
        if (flor.precio) {
            precio = ` y su precio es de ${flor.precio}€`
        }
        let textoStock = ""
        if (!flor.stock) {
            textoStock = "no "
        }
        html1 += `<li><i class="fa-solid fa-trash-can" onclick="borrarItem()"></i>  Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock${precio}.</li>`
    })

    html1 += "</ul>"
    ejercicio1.innerHTML = html1
}

armarLista2(flores)




// ejercicio1.innerHTML += html1  Queda comentado ya que de esta manera se muestran las 2 soluciones

// Ejercicio 2 ==========================================================================================================
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor : rosa, de color blanco, florece en verano y tenemos stock
// se mostrará el resultado en #ejercicio2

let divEjercicio2 = document.getElementById("ejercicio2")

let html2 = "<ol>"

flores.forEach((flor) => {
    let textoStock = ""
    if (!flor.stock) {
        textoStock = "no "
    }
    if (flor.color == "blanco" && flor.floracion == "verano") {
        html2 += (`<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock.</li>`)
    }
})
html2 += "</ol>"


divEjercicio2.innerHTML += html2

// Ejercicio 3 ==========================================================================================================
// A partir del formulario form-seleccion, hay que mostrar que datos corresponden a la seleccion realizada.
// Se mostrará en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones se mostrará este mensaje.
// "No hay ninguna flor que cumpla las condiciones"

let formSeleccion = document.getElementById("form-seleccion")
let radioColor = document.getElementsByName("color")
let radioFloracion = document.getElementsByName("floracion")
let radioStock = document.getElementsByName("stock")

/*
// intentando con los input checked
let seleccionado = document.querySelectorAll("input")
for (let i = 0; i < seleccionado.length; i++) {
    if (seleccionado[i].checked == true) {

        console.log(seleccionado[i].value)
    }
}
console.log(seleccionado)
*/

let divEjercicio3 = document.getElementById("ejercicio3")

formSeleccion.addEventListener("change", (e) => {
    e.preventDefault()

    let color = ""

    for (let i = 0; i < radioColor.length; i++) {
        if (radioColor[i].checked) {
            color = radioColor[i].value
            break
        }
    }
    // console.log(color)

    for (let i = 0; i < radioFloracion.length; i++) {
        if (radioFloracion[i].checked) {
            floracion = radioFloracion[i].value
            break
        }
    }
    // console.log(floracion)

    for (let i = 0; i < radioStock.length; i++) {
        if (radioStock[i].checked) {
            if (radioStock[i].value == "true") {
                stock = true
            } else {
                stock = false
            }
            break
        }
    }
    // console.log(stock)


    let respuestaHtml = "<ul>"

    flores.forEach(flor => {
        let textoStock = ""
        if (!flor.stock) {
            textoStock = "no "
        }
        if (flor.color == color && flor.floracion == floracion && flor.stock == stock) {
            respuestaHtml += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock.</li>`
        }
    })
    respuestaHtml += "</ul>"

    if (respuestaHtml === "<ul></ul>") {
        respuestaHtml = "No hay flor que cumpla las condiciones"
    }

    divEjercicio3.innerHTML = respuestaHtml

    // console.log("has hecho un cambio")
})


// Ejercicio 4 ==========================================================================================================

//Obtener la flor que corresponda a la indicacion del usuario.

let formFlor = document.getElementById("form-flor")
let divEjercicio4 = document.getElementById("ejercicio4")

formFlor.addEventListener("submit", (e) => {
    let respuestaHtml = ""

    e.preventDefault()
    let respuestaUsuario = formFlor[0].value.toLowerCase()
    if (respuestaUsuario.trim() == "") {
        respuestaHtml = "No se aceptan datos sin contenido"
        divEjercicio4.innerHTML = respuestaHtml
        return
    }

    flores.forEach(flor => {
        let textoStock = ""
        if (!flor.stock) {
            textoStock = "no "
        }
        if (flor.nombre.toLowerCase().includes(respuestaUsuario)) {
            respuestaHtml += `<p>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock}tenemos stock.</p>`
        }
    })

    divEjercicio4.innerHTML = respuestaHtml

})

// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1

const formAddFlower = document.getElementById("form-add-flower")

formAddFlower.addEventListener("submit", (e) => {
    e.preventDefault()

    let nombre = formAddFlower[0].value
    let color = formAddFlower[1].value
    let floracion = formAddFlower[2].value
    let stock = formAddFlower[3].checked

    let miFLor = { nombre: nombre, color: color, floracion: floracion, stock: stock }

    flores.push(miFLor)

    // Agregar al local storage el array, debe ser pasado como un formato JSON
    localStorage.setItem("flores", JSON.stringify(flores))

    armarLista2(flores)
})





// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1


// Previamente le he agregado el icono de borrar y un onclick
// en los elementos de la lista generados por la funcion armarLista2()


// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1