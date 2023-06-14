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

    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }
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
    document.lasUnidades.unid_metro.value =Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
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
 * Permite visualizar y ocultar un dov centro de la pagina
 * @method mostrar_ocultrar
 * @return Valor que retorna
 * @param valorMO
 */
let mostrar_ocultar=(valorMO)=>{
    console.log("El valor enviado a la funcion es "+valor);
    if (valorMO==="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }
    else if(valorMO==="val_ocultar"){
        document.getElementById("divMO").style.display='none';
        }
    }

/**
 * Permite calcular
 * @method sumar
 * @param {string} Valor -
 * @return Valor que retorna
 */
let sumar=() => {
    let num1, num2, res;
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;
    res = Number(num1) + Number(num2);
    document.getElementById("totalS").innerHTML = res;

}

let resta=() => {
    let num1, num2, res;
    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;
    res = Number(num1) - Number(num2);
    document.getElementById("totalR").innerHTML = res;

}

let multiplicacion=() => {
    let num1, num2, res;
    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;
    res = Number(num1) * Number(num2);
    document.getElementById("totalM").innerHTML = res;

}
let division=() => {
    let num1, num2, res;
    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;
    res = Number(num1) / Number(num2);
    document.getElementById("totalD").innerHTML = res;

}

let generarUrl=() =>{
   const dist = document.getElementById("distancia").value;
   const unid = document.getElementsByName("unidades")[0].value;

   const urlComp = `segundaWeb.html#${dist}#${unid}`;
   window.open(urlComp);

}

let cargarValores =() => {
    let urlCompleta = window.location.href;
    urlCompleta = urlCompleta.split('#');

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value=`${distancia} ${unidad}`;

}
function guardarLocalStorage(){
    let distancia, undidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidad')[0].value;
    localStorage.setItem("distanciaLS",distancia);
    localStorage.setItem("unidades", unidad);
    window.open("2_web.html");
}

function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + ""+ un;

}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen,yMax-40,40,40);


    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.fillStyle = "#993385";
    ctx.stroke();
    ctx.fill();
}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);
    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if (bandera) {

        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}
function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax=canvas.width;
    var alturaMax = canvas.height;

    // Dibujar lineas horizontales
    ctx.beginPath();
    for (var i=0;i<alturaMax;){
    ctx.moveTo(0,i);
    ctx.lineTo(1000,i);
    ctx.strokeStyle="#cb7e93"
    ctx.stroke();
    i=i+20;
    }
    ctx.closePath();

    // Dibujar lineas verticales
    ctx.beginPath();
    for (var i=0;i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,1000);
        ctx.strokeStyle="#cb7e93"
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    // Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle="#69c2b8"
    ctx.stroke();
    ctx.closePath();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle="#69c2b8"
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX,posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }

}
x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";


    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }
    if (x>canvas.width){
        x=0;
    }
    x+=dx;

}
