import { ESTADO } from "src/entity/producto.entity";
import {} from 'class-validator'
export class CreateProductoDto{
    idProducto?: string;
    desProducto?:string;
    costoProd?:number;
    estado?:ESTADO
}
export class UpdateProductoDto{
    desProducto?:string;
    stockUmc?:number;
    stockUmv?:number;
    numCarasProd?:number;
    costoProd?:number;
    estado?:ESTADO;
}