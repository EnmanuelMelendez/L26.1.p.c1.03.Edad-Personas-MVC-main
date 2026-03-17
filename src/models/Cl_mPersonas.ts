export default class Cl_mPersonas {
    private _edad: number;
    private _nombre: string;

    constructor(edad: number, nombre : string) {
        this._edad = edad;
        this._nombre = nombre;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get edad(): number {
        return this._edad;
    }
    set nombre(n: string) {
        this._nombre = n;
    }

    get nombre(): string {
        return this._nombre;
    }
    }