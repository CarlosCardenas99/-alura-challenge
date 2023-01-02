// Función para encriptar una "llave" de encriptación
function encriptarLlave(mensaje, llave, valor) {
  return mensaje.replace(new RegExp(llave, "g"), valor);
}

// Función para desencriptar una "llave" de encriptación
function desencriptarLlave(mensaje, llave, valor) {
  return mensaje.replace(new RegExp(valor, "g"), llave);
}


// Función para encriptar el mensaje
function encriptar() {
  // Obtener el mensaje y la contraseña introducidos por el usuario
  let mensaje = document.getElementById("mensaje").value.toLowerCase();
  let contrasena = document.getElementById("contrasena").value;

  // Comprobar si se ha introducido una contraseña
  if (!contrasena) {
    alert("Por favor, introduzca una contraseña para encriptar el mensaje");
    return;
  }
  // Eliminar caracteres especiales y acentos del mensaje
   mensaje = mensaje.replace(/[^a-z]/g, "");

  // Encriptar las "llaves" de encriptación
  mensaje = encriptarLlave(mensaje, "e", "enter");
  mensaje = encriptarLlave(mensaje, "i", "imes");
  mensaje = encriptarLlave(mensaje, "a", "ai");
  mensaje = encriptarLlave(mensaje, "o", "ober");
  mensaje = encriptarLlave(mensaje, "u", "ufat");

  // Mostrar el mensaje encriptado
  document.getElementById("mensajeEncriptado").value = mensaje;
}

// Función para desencriptar el mensaje
function desencriptar() {
  // Obtener el mensaje encriptado y la contraseña introducidos por el usuario
  let mensajeEncriptado = document.getElementById("mensajeEncriptado").value.toLowerCase();
  let contrasena = document.getElementById("contrasena").value;

  // Comprobar si se ha introducido una contraseña
  if (!contrasena) {
    alert("Por favor, introduzca una contraseña para desencriptar el mensaje");
    return;
  }

  // Eliminar caracteres especiales y acentos del mensaje encriptado
  mensajeEncriptado = mensajeEncriptado.replace(/[^a-z]/g, "");

  // Desencriptar las "llaves" de encriptación
  mensajeEncriptado = desencriptarLlave(mensajeEncriptado, "e", "enter");
  mensajeEncriptado = desencriptarLlave(mensajeEncriptado, "i", "imes");
  mensajeEncriptado = desencriptarLlave(mensajeEncriptado, "a", "ai");
  mensajeEncriptado = desencriptarLlave(mensajeEncriptado, "o", "ober");
  mensajeEncriptado = desencriptarLlave(mensajeEncriptado, "u", "ufat");

    // Mostrar el mensaje desencriptado
    document.getElementById("mensaje").value = mensajeEncriptado;
;
  }