export default class Cl_mPromedio {
    totalEdad;
    totalPersonas;
    mayorEdad;
    edadMayor;
    constructor() {
        this.totalEdad = 0;
        this.totalPersonas = 0;
        this.mayorEdad = "";
        this.edadMayor = 0;
    }
    procesar(person) {
        this.totalEdad += person.edad;
        this.totalPersonas++;
        if (person.edad > this.edadMayor) {
            this.mayorEdad = person.nombre;
            this.edadMayor = person.edad;
        }
    }
    calcularPromedio() {
        return this.totalEdad / this.totalPersonas;
    }
    nombreMayorEdad() {
        return this.mayorEdad;
    }
    registros() {
        return this.totalPersonas;
    }
}
