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
let convertirGR=(id)=>{
    let gr, rad;
    if(id=="grados"){
        gr = document.getElementById("grados").value;
        rad = (gr*Math.PI)/180;
    }
    else{
        rad = document.getElementById("radianes").value;
        gr = (rad*180)/Math.PI;

    }
    // Asignacion Final
    document.getElementById("radianes").value = rad;
    document.getElementById("grados").value = gr;

}
/**
 * PPermite visualizar y ocultar un dov centro de la pagina
 * @method mostrar_ocultrar
 * @param {string} valor - Valor asociado a un radio button del html
 * @return Valor que retorna
 */
let mostrar_ocultrar=(valor)=>{
    console.log("El valor enviado a la funcion es "+valor);
    if (valor==="val_mostrar"){
        document.getElementById("unDiv")[0].style.display='block';
    }
    else{
        document.getElementById("unDiv")[0].style.display='none';
    }
}

let sumar=() => {
    let num1, num2, res;
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;
    res = Number(num1) + Number(num2);
    document.getElementById("totalS").value = res;

}