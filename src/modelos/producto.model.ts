import { ESTADO } from "src/entity/producto.entity";

export class Producto{
    idProducto?:string;
    desProducto?:string;
    stockUmc?:number;
    stockUmv?:number;
    numCarasProd?:number;
    costoProd?:number;
    estado?:ESTADO;
}
