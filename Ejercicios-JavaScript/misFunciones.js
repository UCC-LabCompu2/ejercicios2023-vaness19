/**
 * Permite convertir unidades entre metros, pies, pulgadas y gardas
 * @method Nombre de la función
 * @param {string} id -Id del input del formulario
 * @param {number} valor -Valor ingresado por el usuario
 * @return Valor que retorna
 */

let conversorUnidades=(id,valor)=> {
    // creacion de variables
    let met, pul, pie, yar;

        if(isNaN(valor)){
        // Comprobar si el valor ingresado es incorrecto o no
        met ="";
        pul = "";
        pie= "";
        yar = "";
        alert("El valor ingresado es incorrecto");
    }
    else if(id=="metro"){
        // Conversion metro a unidades
        met = valor;
        yar = 1.09361*valor;
        pie = 3.28084*valor;
        pul = 39.3701*valor;
    }
    else if (id="yarda"){
        pul= 36*valor;
        pie = 3*valor;
        met = 0.9144*valor;
    }
    else if (id="pie"){
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }
    else if (id="pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
    }
    //Asignacion de las valores a los inputs de la UI
    document.lasUnidades.unid_metro.value =met;
    document.lasUnidades.unid_yarda.value = yar;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_pulgada.value = pul;
}
/**
 * Permite convertir unidades gradios a radianes y viceversa
 * @method Nombre de la función
 * @param {string} id -Id del input del formulario
 * @return Valor que retorna
 */
function convertirGR(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    }
    else{
        let rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = (rad*180)/Math.PI;

    }
}