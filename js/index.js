/**
 * CARNAVAL-OUTLET
 * La Tienda Outlet C.A, ofrece para esta temporada de carnaval, los mejores disfraces para adultos
 * y niños. Se conoce cada disfraz su código, nombre, talla (0...16->niños y S,M,L->adultos) y costo
 * neto. Además se sabe que si el disfraz es para adulto femenino el disfraz tendrá un descuento del
 * 20% sobre el costo neto y si es adulto masculino tendrá un incremento del 10%. Por otro lado, si el
 * disfraz es de niño se debe tomar en cuenta si el disfraz lleva sombrero ó antifaz (cualquiera de
 * los dos), de ser así este tendrá un descuento del 25% sobre el costo neto. La Tienda requiere
 * determinar al final de su jornada laboral: el total vendido y el porcentaje de disfraces de adulto
 * femenino de talla S vendidos.
 * Considere los disfraces niños:
 * (codigo, nombre, talla, costo, accesorio)
 * (22, Batman, 10, 20, SI)
 * (11, Gato, 5, 30, NO)
 * (55, Vaquero, 12, 40, SI)
 * (88, Príncipe, 8, 25, NO)
 * Considere los disfraces adultos:
 * (codigo, nombre, talla, costo, sexo)
 * (44, León, S, 40, F)
 * (33, Rey, S, 50, M)
 * (77, Bombero, M, 30, F)
 * (44, Astronauta, S, 25, F)
 */
import Cl_tienda from "./Cl_tienda.js";
import Cl_nino from "./Cl_nino.js";
import Cl_adulto from "./Cl_adulto.js";

let tienda = new Cl_tienda(),
  nino1 = new Cl_nino(22, "Batman", 10, 20, "SI"),
  nino2 = new Cl_nino(11, "Gato", 5, 30, "NO"),
  nino3 = new Cl_nino(55, "Vaquero", 12, 40, "SI"),
  nino4 = new Cl_nino(88, "Príncipe", 8, 25, "NO"),
  adulto1 = new Cl_adulto(44, "León", "S", 40, "F"),
  adulto2 = new Cl_adulto(33, "Rey", "S", 50, "M"),
  adulto3 = new Cl_adulto(77, "Bombero", "M", 30, "F"),
  adulto4 = new Cl_adulto(44, "Astronauta", "S", 25, "F"),
  salida = document.getElementById("salida");

tienda.procesarDisfraz(nino1);
tienda.procesarDisfraz(nino2);
tienda.procesarDisfraz(nino3);
tienda.procesarDisfraz(nino4);
tienda.procesarDisfraz(adulto1);
tienda.procesarDisfraz(adulto2);
tienda.procesarDisfraz(adulto3);
tienda.procesarDisfraz(adulto4);

let mostrarDisfraz = (disfraz) => {
  return `
  <tr>
    <td>${disfraz.codigo}</td>
    <td>${disfraz instanceof Cl_nino ? "Niño" : "Adulto"}</td>
    <td>${disfraz.nombre}</td>
    <td>${disfraz.talla}</td>
    <td>${disfraz.costo}</td>
    <td>${disfraz.descuento().toFixed(2)}</td>
    <td>${disfraz.incremento().toFixed(2)}</td>
    <td>${disfraz.precio().toFixed(2)}</td>
  </tr>`;
};

salida.innerHTML = `
<table>
  <th>Código</th>
  <th>Tipo</th>
  <th>Nombre</th>
  <th>Talla</th>
  <th>Costo</th>
  <th>Descuento</th>
  <th>Incremento</th>
  <th>Precio</th>
${mostrarDisfraz(nino1)}
${mostrarDisfraz(nino2)}
${mostrarDisfraz(nino3)}
${mostrarDisfraz(nino4)}
${mostrarDisfraz(adulto1)}
${mostrarDisfraz(adulto2)}
${mostrarDisfraz(adulto3)}
${mostrarDisfraz(adulto4)}
</table>
`;
salida.innerHTML += `Total vendido: $${tienda.totalVendido().toFixed(2)}`;
salida.innerHTML += `<br>Porcentaje de disfraces de adulto femenino de talla S vendidos: ${tienda
  .porcFemeninoS()
  .toFixed(2)}%`;
