export default class Cl_vPromedio {
    vista;
    lblPromedio;
    lblMayorEdad;
    btAgregar;
    lblRegistros;
    constructor() {
        this.vista = document.getElementById("promedio");
        this.lblPromedio = document.getElementById("promedio_lblPromedio");
        this.lblMayorEdad = document.getElementById("promedio_lblMayorEdad");
        this.btAgregar = document.getElementById("promedio_btAgregar");
        this.lblRegistros = document.getElementById("promedio_lblRegistros");
        this.mostrar();
    }
    reportar({ promedio, persona }) {
        this.lblPromedio.innerText = `${promedio.calcularPromedio()}`;
        this.lblRegistros.innerHTML = `${promedio.registros()}`;
        this.lblMayorEdad.innerText = `${promedio.nombreMayorEdad()}`;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
