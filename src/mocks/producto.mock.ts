import { Producto } from "src/modelos/producto.model";
import { v4 } from 'uuid'
import {ESTADO} from '../entity/producto.entity'
export const PRODUCTOS:Producto[]=[
    {
        idProducto:v4(),
        desProducto: 'Arroz',
        stockUmc: 10,
        stockUmv: 1,
        numCarasProd: 2,
        costoProd: 1200,
        estado:ESTADO.ACTIVO
      }
]