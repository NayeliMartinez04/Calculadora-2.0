let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
let btnDivision = document.getElementById("btnDivision");
let textDisplay = document.getElementById("textDisplay");

btnSuma.onclick = sumar;
btnResta.onclick = restar;
btnMultiplicacion.onclick = multiplicar;
btnDivision.onclick = dividir;

function limpiar() {
  number1.value = "";
  number2.value = "";
}

const validar = function() {
  if (isNaN(parseInt(number1.value)) && isNaN(parseInt(number2.value))) {
    alert("No es valido");
    return false;
  }
  return true;
};

function sumar() {
  if (validar()) {
    const result = parseInt(number1.value) + parseInt(number2.value);
    textDisplay.innerHTML = result;
    limpiar();
  }
}

function restar() {
  if (validar()) {
    const result = parseInt(number1.value) - parseInt(number2.value);
    textDisplay.innerHTML = result;
    limpiar();
  }
}

function multiplicar() {
  if (validar()) {
    const result = parseInt(number1.value) * parseInt(number2.value);
    textDisplay.innerHTML = result;
    limpiar();
  }
}

function dividir() {
  if (validar()) {
    const result = parseInt(number1.value) / parseInt(number2.value);
    textDisplay.innerHTML = result;
    limpiar();
  }
}
