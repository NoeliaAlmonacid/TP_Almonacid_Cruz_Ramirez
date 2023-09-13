function comprobacionFecha(){
    let f1 = document.getElementById("fincial");
    let f2 = document.getElementById("ffin");

    if(f1.value > f2.value && f2.value !=''){

        alert("La fecha Inicial no puede ser Posterior a la fecha Fin del Curso");
        f2.value= f1.value;

    }

} 