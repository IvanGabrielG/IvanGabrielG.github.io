
/*Recordar asociar cada archivo javascript al html con <script></script>*/


var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //Previene el comportamiento por defecto del evento, en este caso es actualizar la página.
    var form = document.querySelector("#form-adicionar");
    //Captura datos del formulario
    var paciente = capturarDatosPaciente(form);
    var errores = validarPaciente(paciente);
    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return; //El return vacío corresponde a la función anónima, sirve para detener la ejecución de la función y no enviar los datos erróneos.
    }
    //Validar paciente
    adicionarPacienteEnLaTabla(paciente);
    //Los createElement y appendChild son los encargados de conectar a js con html. Añadir clase es con classList.add. El contenido con .textContent y appendChild agrega un hijo
    form.reset(); //reinicia formulario limpiando celdas
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML=""; //innerHTML edita el contenido interno del HTML

});


function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){
    var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value,form.altura.value)
}
    return paciente;
}

function construirTr(paciente){
    //Crear elementos td's y un tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Asignación al tr de los td y del tr a la tabla.
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));
    return pacienteTr;
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent=dato;
    return td;
}

function validarPaciente(paciente){
    var errores = [];
    //Validación de campos vacios
    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacío");
    }
    if(paciente.gordura.length == 0){
        errores.push("El porcentaje de gordura no puede estar vacío");
    }
    //Validación de valores válidos
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML=""; //Con esto se cierra la lista, se vacia
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

//Siempre es buena práctica reducir con el uso de funciones la cantidad de líneas de código y optimizar la legibilidad y mantenimiento del código.
//Siempre analizar si las funciones tienen demasiadas responsabilidades, y de ser posible, delegar en otras funciones responsabilidades menores de la principal. 