var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event){
    //event.target; Esto sirve para señalar al elemento donde se realizó la acción,el this. solo lograría eliminar la tabla entera al darse la condición. Captura el mínimo objeto, si hace click en gordura de paciente, se eliminará ella únicamente
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){ //setTimeOut impone tiempo de espera al navegador para la ejecución de una tarea. Primer argumento es lo que se realizará después de ese tiempo, y el segundo el tiempo de espera deseado
        event.target.parentNode.remove();
    },500); //Asciende un nivel en el event target, que es el atributo de la tabla en donde se hizo click.
}); //Se utilizo event bubbling, delegación de eventos


/*pacientes.forEach(function(pacientes){
    pacientes.addEventListener("dblclick",function(){
        this.remove();
    })
});*/