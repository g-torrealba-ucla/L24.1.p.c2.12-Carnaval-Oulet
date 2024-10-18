export default class Cl_disfraz {
  constructor(codigo, nombre, talla, costo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.talla = talla;
    this.costo = costo;
  }
  precio() {
    return this.costo - this.descuento() + this.incremento();
  }
  descuento() {
    return 0;
  }
  incremento() {
    return 0;
  }
}
