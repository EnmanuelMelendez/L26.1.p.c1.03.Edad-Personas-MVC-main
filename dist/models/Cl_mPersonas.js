export default class Cl_mPersonas {
    _edad;
    _nombre;
    constructor(edad, nombre) {
        this._edad = edad;
        this._nombre = nombre;
    }
    set edad(value) {
        this._edad = value;
    }
    get edad() {
        return this._edad;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
}
