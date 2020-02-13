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

function sumar() {
  const result = parseInt(number1.value) + parseInt(number2.value);
  textDisplay.innerHTML = result;
}

function restar() {
  const result = parseInt(number1.value) - parseInt(number2.value);
  textDisplay.innerHTML = result;
}

function multiplicar() {
  const result = parseInt(number1.value) * parseInt(number2.value);
  textDisplay.innerHTML = result;
}

function dividir() {
  const result = parseInt(number1.value) / parseInt(number2.value);
  textDisplay.innerHTML = result;
}
