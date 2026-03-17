export default class cl_vPersonas {
    vista;
    inEdad;
    inNombre;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("persona");
        this.inEdad = document.getElementById("persona_inEdad");
        this.inNombre = document.getElementById("persona_inNombre");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.mostrar();
    }
    get edad() {
        return +this.inEdad.value;
    }
    get nombre() {
        return this.inNombre.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
