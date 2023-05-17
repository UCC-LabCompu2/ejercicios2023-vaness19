/**
 * Permite convertir unidades entre metros, pies, pulgadas y gardas
 * @method Nombre de la función
 * @param {string} id -Id del input del formulario
 * @param {number} valor -Valor ingresado por el usuario
 * @return Valor que retorna
 */

function conversorUnidades(id,valor){
    if(isNaN(valor)){
        document.lasUnidades.unid_metro.value ="";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = ""
        alert("El valor ingresado es incorrecto");
    }
    else if(id=="metro"){
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
    }
    else if (id="yarda"){
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;
        document.lasUnidades.unid_metro.value = 0.9144*valor;
    }
    else if (id="pie"){
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }
    else if (id="pulgada"){}
    document.lasUnidades.unid_metro.value = 0.0254*valor;
    document.lasUnidades.unid_yarda.value = 0.0277778*valor;
    document.lasUnidades.unid_pie.value = 0.0833333*valor;
}