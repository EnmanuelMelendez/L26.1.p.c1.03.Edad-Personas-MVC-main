import Cl_mPersonas from "./Cl_mPersonas";

export default class Cl_mPromedio {
    private totalEdad: number;
    private totalPersonas: number;
    private mayorEdad: string;
    private edadMayor: number;

    constructor() {
        this.totalEdad = 0;
        this.totalPersonas = 0;
        this.mayorEdad = "";
        this.edadMayor = 0;
    }

    procesar(person: Cl_mPersonas): void {
        this.totalEdad += person.edad;
        this.totalPersonas++;

        if(person.edad > this.edadMayor ){
            this.mayorEdad = person.nombre
            this.edadMayor = person.edad
        }
        
        
    }

    calcularPromedio(): number {
        return this.totalEdad / this.totalPersonas;
    }
    nombreMayorEdad(): string {
        return this.mayorEdad;
    }
    registros(): number {
        return this.totalPersonas;

    }
}
        
    