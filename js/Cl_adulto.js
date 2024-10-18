import Cl_disfraz from "./Cl_disfraz.js";
export default class Cl_adulto extends Cl_disfraz {
  constructor(codigo, nombre, talla, costo, sexo) {
    super(codigo, nombre, talla, costo);
    this.sexo = sexo;
  }
  descuento() {
    if (this.sexo == "F") return this.costo * 0.2;
    else return 0;
  }
  incremento() {
    if (this.sexo == "M") return this.costo * 0.1;
    else return 0;
  }
}
