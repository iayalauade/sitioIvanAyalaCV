/*const oscuroFondo = "rgb(93, 90, 111)";
const oscuroComponentes = "rgb(0, 0, 0)";
const oscuroTextos = "rgb(151, 147, 177)";
const letraNegra = "rgb(0, 0, 0)";
const letraBlanca = "rgb(255, 255, 255)";

const claroComponentes = "rgb(16, 31, 164)";
const claroFondo = "rgb(207, 222, 246)";
const claroTextos = "rgb(162,209,236)";
const encuadre = document.getElementById('encuadre');
const navegador = document.getElementById('navbar');
const perfil = document.getElementById('perfil');
const textos = document.getElementById('textos');
const resenia = document.getElementById('resenia');
const desperfil = document.getElementById('desperfil');


    var colorFondo = elementoGuardado[0];
    var colorComponentes = elementoGuardado[1];
    var colorTextos = elementoGuardado[2];
    var colorLetras = elementoGuardado[3];
    var colorActual = encuadre.style.backgroundColor;

    //Cambiar al color guardado
    if (colorActual !== colorFondo) {
        encuadre.style.backgroundColor = colorFondo;
        navegador.style.backgroundColor = colorComponentes;
        perfil.style.backgroundColor = colorComponentes;
        textos.style.backgroundColor = colorComponentes;
        resenia.style.backgroundColor = colorTextos;
        desperfil.style.backgroundColor = colorTextos;


        encuadre.style.color = colorLetras;
        navegador.style.color = colorLetras;
        perfil.style.color = colorLetras;
        textos.style.color = colorLetras;
        resenia.style.color = colorLetras;
        desperfil.style.color = colorLetras;


function turnLight() {

    encuadre.style.backgroundColor = claroFondo;
    navegador.style.backgroundColor = claroComponentes;
    perfil.style.backgroundColor = claroComponentes;
    textos.style.backgroundColor = claroComponentes;
    resenia.style.backgroundColor = claroTextos;
    desperfil.style.backgroundColor = claroTextos;

    encuadre.style.color = letraNegra;
    navegador.style.color = letraNegra;
    perfil.style.color = letraNegra;
    textos.style.color = letraNegra;
    resenia.style.color = letraNegra;
    desperfil.style.color = letraNegra;
}

function turnDark() {

    let colorFondo = encuadre.style.backgroundColor;
    let colorComponentes = navegador.style.backgroundColor;
    let colorTextos = resenia.style.backgroundColor;

    if (colorComponentes === claroComponentes || colorComponentes === '') {
        encuadre.style.backgroundColor = oscuroFondo;
        navegador.style.backgroundColor = oscuroComponentes;
        perfil.style.backgroundColor = oscuroComponentes;
        textos.style.backgroundColor = oscuroComponentes;
        resenia.style.backgroundColor = oscuroTextos;
        desperfil.style.backgroundColor = oscuroTextos;
        encuadre.style.color = letraBlanca;
        navegador.style.color = letraBlanca;
        perfil.style.color = letraBlanca;
        textos.style.color = letraBlanca;
        resenia.style.color = letraBlanca;
        desperfil.style.color = letraBlanca;


    } else {
        turnLight()
    }

    if (elementos.length == 0) {
        elementos.push(encuadre.style.backgroundColor);
        elementos.push(navegador.style.backgroundColor);
        elementos.push(resenia.style.backgroundColor);
        elementos.push(desperfil.style.color);
    } else {
        elementos = []
        elementos.push(encuadre.style.backgroundColor);
        elementos.push(navegador.style.backgroundColor);
        elementos.push(resenia.style.backgroundColor);
        elementos.push(desperfil.style.color);
    }



    recovereTheme();
}

recovereTheme();*/

const sheet = new CSSStyleSheet();
const elementosModificados = "span { color: white !important; } .encuadre { background-color: rgb(93, 90, 111) !important; } .navbar { background-color: rgb(0, 0, 0) !important; } .perfil { background-color: rgb(0, 0, 0) !important; } .textos { background-color: rgb(0, 0, 0) !important; } .detallecv { background-color: rgb(151, 147, 177) !important; } .resenia { background-color: rgb(151, 147, 177) !important;} .desperfil { background-color: rgb(151, 147, 177) !important; }";
let toggle = localStorage.getItem("toggle");

function recuperarTema() {

    var elementoGuardado = JSON.parse(localStorage.getItem("elementos"));
    if (elementoGuardado.length > 0 && toggle) {
        sheet.replaceSync(elementosModificados);
        document.adoptedStyleSheets = [sheet];
    } else {
        sheet.replaceSync("");
        document.adoptedStyleSheets = [sheet];
    }

}

function cambiarTema() {
    var elementos = [];
    toggle = !toggle;
    localStorage.setItem("toggle", JSON.stringify(toggle));

    if (toggle) { // Este es para cuando es tema negro
        elementos.push(elementosModificados);       
        localStorage.setItem("elementos", JSON.stringify(elementos));
        sheet.replaceSync(elementosModificados);
        document.adoptedStyleSheets = [sheet];
    } else { // Este para tema blanco        
        elementos = [];
        localStorage.setItem("elementos", JSON.stringify(elementos));
        sheet.replaceSync("");
        document.adoptedStyleSheets = [sheet];
    }
}
recuperarTema();