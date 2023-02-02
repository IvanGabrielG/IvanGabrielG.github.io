//alert("Hola mundo");/*Alerta en javascript. Siempre el código Javascript va después del código HTML. En este caso dentro del body y antes del fin HTML*/
console.log("Estoy imprimiendo desde principal js");

var titulo = document.querySelector(".titulo"); /*Document es un DOM que representa página HTML para navegador, javascript lo utiliza para manipular página .querySelector es el que conecta a javascript con HTML y CSS*/
/*DOM es la representación en memoria del HTML producida por el navegador al leerlo. Cuando javascript manipula DOM, altera representación en memoria de lo que el navegador interpreta*/
/*Buena práctica: utilizar nombre de clases y no de etiquetas, para no afectar página de cambiar etiquetas*/
/*Las buenas prácticas es para que el programa crezca de forma organizada.*/ 
//console.log(titulo.textContent); /*Propiedad para ver el contenido de H1*/


//Esto de poner una función sin nombre se llama funciones anónimas, se utilizan mucho para los eventos. Como no tienen nombre, no pueden reutilizarse. No tiene sentido reutilizarlas pues son para una acción específica en un evento
//El comportamiento por defecto de los botones es recargar la página al pulsar sobre ellos

/*
function botonHandler() {

        copia.textContent = inputFrase.value;
        inputFrase.value = "";

    } Código correcto para leer dato en entrada al presionar un botón
*/ 


var pacientes = document.querySelectorAll(".paciente"); //Sin el ALL, el querySelector sólo toma el primero que encuentra

/*Para repetir operación en todos los pacientes usamos bucles*/

for(var i=0; i<pacientes.length; i++){
    paciente = pacientes[i];
    var tdPeso=paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    // imc = peso / altura*altura

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //console.log(altura);
    //console.log(peso);
    var imc = peso/(altura*altura);
    //console.log(imc); 

    var tdIMC =  paciente.querySelector(".info-imc");
    pesoEsValido= validarPeso(peso);
    alturaEsValida= validarAltura(altura);

    /*Validación de parámetros*/ 
    if(!pesoEsValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido=false;
        paciente.classList.add("paciente-incorrecto"); /*Pinta la fila que contenga un error. classlist.add añade una clase para modificar estilo de fila desde el CSS. Le agrega al elemento la clase con este método*/ 
    }

    /*En .addEventListener('click', botonHandler). Si escribimos botonHandler(), en lugar de invocar la función, pasa su resultado como parámetro, le asocia su retorno*/ 

    if(!alturaEsValida){
        console.log("Altura incorrecta");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida=false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura); //.toFixed(número) da la cantidad de decimales a mostrar después del punto decimal.
    }
}


function calcularIMC(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}


function validarPeso(peso){
    if((peso>=0) && (peso<1000)){
         return true;
    }
    else{
        return false;
    }
}

function validarAltura(altura){
    if((altura<2.5) && (altura>=0)){
         return true;
    }
    else{
        return false;
    }
}

/*Una buena práctica es separar códigos por funcionalidades*/ 
/*Crear muchas funciones puede aumentar las líneas de código que resuelve nuestro problema, pero ese código extra está permitido si garantiza legibilidad y mantenimiento*/

/*

<ul>
    <li class="invitado">
        Nombre <span class="nombre">Diego</span>,
        edad <span class="edad">23</span>
    </li>
    <li class="invitado">
        Nombre <span class="nombre">Daniel</span>,
        edad <span class="edad">42</span>
    </li>    
    <li class="invitado">
        Nombre <span class="nombre">Marcos</span>,
        edad <span class="edad">27</span>
    </li>    
    <li class="invitado">
        Nombre <span class="nombre">Fabio</span>,
        edad <span class="edad">18</span>
    </li>

    Total de las edades: <span class="total"></span>
</ul>

<script>

    //Función que encapsula la responsabilidad de capturar la lista de invitados
    function obtenerListaInvitados(){
        var items = document.querySelectorAll('.invitado');
        return items
    }
    //Función para obtener las edades de los invitados
    function obtenerEdades(listaInvitados){
        var edades = [];
        for(var i = 0; i < listaInvitados.length; i++) {
            var edad = listaInvitados[i].querySelector('.edad').textContent;
            edades.push(edad);    
        }
        return edades;    
    }

    //Función genérica que realiza la suma de los valores de uma lista de valores
    function calcularTotalSuma(lista){
        var total = 0;
        for(var i = 0; i < lista.length; i++) {
            total +=parseInt(lista[i]);
        }
        return total;
    }

    //Función que imprime en el objeto DOM que tiene como clase "total" 
    function imprimirTotalEdadades(total){
        document.querySelector('.total').textContent = total;
    }

    var listaInvitados = obtenerListaInvitados();
    var edades = obtenerEdades(listaInvitados);
    var totalEdades = calcularTotalSuma(edades);
    imprimirTotalEdadades(totalEdades);

</script>


*/