/* VALIDACIONES */
function validar(inputText) {
  //expresion regular para minusculas y espacios
  const validos = /^[a-z\s]*$/;
  if (!validos.test(inputText)) {
    mostrarNotificacion("Solo se permiten letras minusculas y espacios");
    return false;
  }
  return true;
}
/* VALIDACIONES */
/* ENCRIPTAR */
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

// escucha el evento del click en el boton encriptar
document.getElementById("encript").addEventListener("click", () => {
  let inputText = document.getElementById("toEncript").value;
  if (validar(inputText)) {
    let encriptado = encriptar(inputText);
    //muestra la palabra a encriptar durante 5 seg, luego setea el input
    document.getElementById("encripted").innerHTML = encriptado;
    setTimeout(function () {
      document.getElementById("toEncript").value = "";
    }, 5000);
  }
});
/* ENCRIPTAR */

/* DESENCRIPTAR */
function desencriptar(inputText) {
  const cadenas = ["ai", "enter", "imes", "ober", "ufat"];
  let desencript = "";
}

document.getElementById("decript").addEventListener("click", () => {
  let inputText = document.getElementById("toDecript").value;

  if (validar(inputText)) {
    let desencriptado = desencriptar(inputText);

    //muestra la palabra a encriptar durante 5 seg, luego setea el input
    document.getElementById("encripted").innerHTML = desencriptado;
    setTimeout(function () {
      document.getElementById("toEncript").value = "";
    }, 5000);
  }
});

/* DESENCRIPTAR */
/* COPIAR */
document.getElementById("copy").addEventListener("click", () => {
  let textarea = document.getElementById("encripted");
  if (textarea.value) {
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    mostrarNotificacion("Texto copiado a portapapeles");
    textarea.setAttribute("readonly", true);
  } else {
    mostrarNotificacion("No hay texto para copiar");
  }
});
/* COPIAR */
/* BORRAR */
document.getElementById("delete").addEventListener("click", () => {
  let textarea = document.getElementById("encripted");
  textarea.value = "";
  textarea.setAttribute("readonly", false);
  location.reload();
});
/* BORRAR */

/* NOTIFICACION */
function mostrarNotificacion(mensaje) {
  const notification = document.getElementById("notification");
  notification.innerText = mensaje;
  notification.style.visibility = "visible";

  setTimeout(() => {
    notification.style.visibility = "hidden";
  }, 3000); // Oculta la notificación después de 3 segundos
}
/* NOTIFICACION */