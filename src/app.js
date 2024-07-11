/* VALIDACIONES */
function validar(inputText) {
  //expresion regular para minusculas y espacios
  const validos = /^[a-z\s]*$/;
  if (!validos.test(inputText)) {
    alert("Solo se permiten letras minusculas y espacios");
    return "";
  }
  return encriptar(inputText);
}
/* VALIDACIONES */
/* ENCRIPTACION */
function encriptar(inputText) {
  const letras = ["a", "e", "i", "o", "u"];
  let encript = "";

  for (let i = 0; i < inputText.length; i++) {
    if (letras.includes(inputText[i])) {
      switch (inputText[i]) {
        case "a":
          encript += "ai";
          break;
        case "e":
          encript += "enter";
          break;
        case "i":
          encript += "imes";
          break;
        case "o":
          encript += "ober";
          break;
        case "u":
          encript += "ufat";
          break;
      }
    } else {
      encript += inputText[i];
    }
  }
  return encript;
}
/* ENCRIPTACION */

document.getElementById("encript").addEventListener("click", () => {
  let inputText = document.getElementById("toEncript").value;
  let encriptado = validar(inputText);
  if (!encriptado) {
  }
  document.getElementById("encripted").innerHTML = encriptado;
  document.getElementById("toEncript").value = "";
});
