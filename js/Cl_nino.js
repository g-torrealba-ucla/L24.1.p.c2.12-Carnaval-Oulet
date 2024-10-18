import Cl_disfraz from "./Cl_disfraz.js";

export default class Cl_nino extends Cl_disfraz {
  constructor(codigo, nombre, talla, costo, accesorio) {
    super(codigo, nombre, talla, costo);
    this.accesorio = accesorio;
  }
  descuento() {
    if (this.accesorio == "SI") return this.costo * 0.25;
    else return 0;
  }
}
