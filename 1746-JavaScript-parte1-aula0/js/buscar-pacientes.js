var boton = document.querySelector("#buscar-paciente");

boton.addEventListener("click", function(){
    //Api es un reporsitorio que ya está listo y podemos recolectar datos de él. En este caso de un archivo Json mediante requisiciones AJAX
    //API es un servidor externo, y queremos realizar una importación de datos
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status==200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            //Hasta este momento la información recolectada es formato string. Pero por el formato del archivo JSON podemos convertirlo por su formato similar a objetos en javascript
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente)
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});