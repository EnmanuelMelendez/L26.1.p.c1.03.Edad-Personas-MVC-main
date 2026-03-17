import Cl_mPersonas from "../models/Cl_mPersonas";
import Cl_mPromedio from "../models/Cl_mPromedio";

export default class Cl_vPromedio {
    vista: HTMLElement;
    lblPromedio: HTMLElement;
    lblMayorEdad: HTMLElement;
    btAgregar: HTMLButtonElement;
    lblRegistros: HTMLElement;

    constructor() {
        this.vista = document.getElementById("promedio") as HTMLElement;
        this.lblPromedio = document.getElementById("promedio_lblPromedio") as HTMLElement;
        this.lblMayorEdad = document.getElementById("promedio_lblMayorEdad") as HTMLElement;
        this.btAgregar = document.getElementById("promedio_btAgregar") as HTMLButtonElement;
        this.lblRegistros = document.getElementById("promedio_lblRegistros") as HTMLElement;
        this.mostrar();
    }

    reportar({ promedio, persona}: { promedio: Cl_mPromedio; persona: Cl_mPersonas }): void {
        this.lblPromedio!.innerText = `${promedio.calcularPromedio()}`;
        this.lblRegistros!.innerHTML = `${promedio.registros()}`;
        this.lblMayorEdad!.innerText = `${promedio.nombreMayorEdad()}`;
    }

    mostrar(): void {
        this.vista.hidden = false;
    }

    ocultar(): void {
        this.vista.hidden = true;
    }

}