var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function(){
    
    //Tengo que recolectar pacientes en tabla para compararlos con lo ingresado con usuario
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){

        for (var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value,"i"); //El uso de expresiones regulares es útil para proesamiento de textos
            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }
            else{
                paciente.classList.remove("invisible");
            }
        }
    }else{
        for (var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }

    
});