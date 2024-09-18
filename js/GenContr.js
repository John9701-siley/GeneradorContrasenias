class GenContr {
  constructor() {
    this.cadenaCaracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    //BARRA CONTRASEÑA SEGURA
    this.barraContrasenia = document.getElementById("strengthBarFill");
    //BARRA CONTRASEÑA SEGURA

    //INPUTS
    this.txtNumCaracteres = document.getElementById("cantidad");
    this.txtContraseña = document.getElementById("contrasena");
    this.txtPassSegura = document.getElementById("passwordStrength");
    //INPUTS

    //BOTONES
    this.btnGenerar = document.getElementById("generar");
    this.btnLimpiar = document.getElementById("limpiar");
    //BOTONES

    //EVENTOS
    this.btnGenerar.addEventListener("click",this.generarContraseña.bind(this));
    this.btnLimpiar.addEventListener("click", this.limpiar.bind(this));
    this.txtContraseña.addEventListener("keyup", this.eventoBarraContrasenia.bind(this));
    //EVENTOS
  }

  generarContraseña() {
    let txtNumero = this.txtNumCaracteres.value;
    this.limpiar();
    if (this.validarCampo()) {
      let contrasenia = "";
      for (let i = 0; txtNumero > i; i++) {
        let caracterAleatorio =
          this.cadenaCaracteres[
          Math.floor(Math.random() * this.cadenaCaracteres.length)
          ];
        contrasenia += caracterAleatorio;
      }
      this.txtContraseña.value = contrasenia;
      this.eventoBarraContrasenia();
    }
  }

  limpiar() {
    this.txtContraseña.value = "";
    this.barraContrasenia.className = 'strength-bar__fill';
    this.txtPassSegura.textContent = "";
  }

  validarCampo() {
    let txtNumero = this.txtNumCaracteres.value;
    if (txtNumero.trim() === "") {
      alert("El campo esta vacio");
      return false;
    }
    if (Number(txtNumero) < 6) {
      alert("El numero de caracteres es menor a 6");
      return false;
    }
    return true;
  }

  eventoBarraContrasenia() {
    let contrasenia = this.txtContraseña.value;
    let strengthBarFill = this.barraContrasenia;
    let seguridad = 0;
    let textoPass = "";
    console.log(this.barraContrasenia);

    if (contrasenia.length > 6) seguridad++;
    else{
      textoPass = "Teclee almenos 6 caracteres";
    }

    if (/[a-z]+/.test(contrasenia)) seguridad++;
    else{
      textoPass = "Teclee al menos una minuscula";
    }

    if (/[A-Z]+/.test(contrasenia)) seguridad++;
    else{
      textoPass = "Teclee al menos una mayuscula";
    }

    if (/[0-9]+/.test(contrasenia)) seguridad++;
    else{
      textoPass = "Teclee al menos un digito";
    }

    if (/[^a-zA-Z0-9]+/.test(contrasenia)) seguridad++;
    else{
      textoPass = "Teclee al menos un caracter especial";
    }

    switch (seguridad) {
      case 1:
        strengthBarFill.className = "strength-bar__fill short";
        this.txtPassSegura.textContent = textoPass;
        break;
      case 2:
        strengthBarFill.className = "strength-bar__fill weak";
        this.txtPassSegura.textContent = textoPass;
        break;
      case 3:
        strengthBarFill.className = "strength-bar__fill good";
        this.txtPassSegura.textContent = textoPass;
        break;
      case 4:
        strengthBarFill.className = "strength-bar__fill strong";
        this.txtPassSegura.textContent = textoPass;
        break;
      case 5:
        strengthBarFill.className = "strength-bar__fill very-strong";
        this.txtPassSegura.textContent = textoPass;
        break;
      default:
        strengthBarFill.className = "strength-bar__fill";
        this.txtPassSegura.textContent = "";
        break;
    }
    console.log(this.barraContrasenia);
  }
}
export { GenContr };
