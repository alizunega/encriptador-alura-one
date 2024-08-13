/* VALIDACIONES */
function validar(inputText) {
  //expresion regular para minusculas y espacios
  const validos = /^[a-z\sñ]*$/;
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
  let divLoading = document.getElementById("loading");
  divLoading.style.display = "none";

  if (validar(inputText)) {
    let encriptado = encriptar(inputText);
    if (encriptado === "") {
      return mostrarNotificacion("No se puede encriptar un texto vacío");
    }
    document.getElementById("encripted").style.display = "block";
    document.getElementById("encripted").innerHTML = encriptado;
  }
});
/* ENCRIPTAR */

/* DESENCRIPTAR */
function desencriptar(inputText) {
  const cadenas = ["ai", "enter", "imes", "ober", "ufat"];
  let desencript = "";
  let arrayString = inputText.split(" ");
  for (let cadena of cadenas) {
    for (let i = 0; i < arrayString.length; i++) {
      if (arrayString[i].includes(cadena)) {
        arrayString[i] = arrayString[i].replaceAll(cadena, cadena[0]);
      }
    }
  }
  desencript = arrayString.join(" ");
  if (desencript === inputText) {
    mostrarNotificacion("El texto no fue encriptado!");
    return "";
  }
  return desencript;
}

document.getElementById("decript").addEventListener("click", () => {
  let inputText = document.getElementById("toEncript").value;
  let textArea = document.getElementById("encripted");
  let divLoading = document.getElementById("loading");
  if (inputText === "") {
    textArea.style.display = "none";
    divLoading.style.display = "block";
    mostrarNotificacion("No hay texto para desencriptar");
  } else {
    if (validar(inputText)) {
      let desencriptado = desencriptar(inputText);
      divLoading.style.display = "none";
      document.getElementById("encripted").style.display = "block";
      document.getElementById("encripted").innerHTML = desencriptado;
    }
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
  } else {
    mostrarNotificacion("No hay texto para copiar");
  }
});
/* COPIAR */

/* BORRAR */
document.getElementById("delete").addEventListener("click", () => {
  let textarea = document.getElementById("encripted");
  let textarea2 = document.getElementById("toEncript");

  if (!textarea.value && !textarea2.value) {
    mostrarNotificacion("No hay texto para borrar");
  } else {
    textarea.value = "";
    textarea2.value = "";
    mostrarNotificacion("Texto borrado. Página recargando");
  }

  // recargo pagina
  setTimeout(() => {
    location.reload();
  }, 2000);
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
/* AYUDA */
function mostrarAyuda() {
  const help = document.getElementById("mensajeAyuda");
  help.style.visibility = "visible";

  const cerrar = document.getElementById("close");
  cerrar.addEventListener("click", () => {
    help.style.visibility = "hidden";
  });

  //si no cierra la notificacion, se cerrara sola en 10 seg
  setTimeout(() => {
    help.style.visibility = "hidden";
  }, 10000);
}

//evento click en boton ayuda
document.getElementById("help").addEventListener("click", mostrarAyuda);

/* AYUDA */
