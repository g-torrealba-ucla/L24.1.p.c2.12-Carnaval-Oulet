import Cl_adulto from "./Cl_adulto.js";
export default class Cl_tienda {
  constructor() {
    this.acMonto = 0;
    this.contAdultoFem = 0;
    this.contFemeninoS = 0;
  }
  procesarDisfraz(disfraz) {
    this.acMonto += disfraz.precio();
    if (disfraz instanceof Cl_adulto) {
      if (disfraz.sexo === "F") this.contAdultoFem++;
      if (disfraz.sexo === "F" && disfraz.talla === "S") {
        this.contFemeninoS++;
      }
    }
  }
  totalVendido() {
    return this.acMonto;
  }
  porcFemeninoS() {
    return (this.contFemeninoS / this.contAdultoFem) * 100;
  }
}
