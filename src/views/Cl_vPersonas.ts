export default class cl_vPersonas {
    vista: HTMLElement;
    inEdad: HTMLInputElement;
    inNombre: HTMLInputElement;
    btAceptar: HTMLButtonElement;
    btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("persona") as HTMLElement;
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
        this.btAceptar = document.getElementById("persona_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("persona_btCancelar") as HTMLButtonElement;
        this.mostrar();
    } 

    get edad(): number {
        return +this.inEdad.value;
    }
    get nombre(): string {
        return this.inNombre.value;
    }

    mostrar(): void {
        this.vista.hidden = false;
    }

    ocultar(): void {
        this.vista.hidden = true;
    }
    
}