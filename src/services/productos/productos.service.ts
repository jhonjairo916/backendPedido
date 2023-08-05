import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from 'src/dto/createProducto.dto';
import { PRODUCTOS } from 'src/mocks/producto.mock';
import { Producto } from 'src/modelos/producto.model';
import { v4 } from 'uuid';

@Injectable()
export class ProductosService {
  productos: Producto[] = PRODUCTOS;
  constructor() {
    //this.producto= PRODUCTOS
  }
  getProductos(): Promise<Producto[]> {
    return Promise.resolve(this.productos);
  }
  getProductoId(id: string) {
    const productoEncontrado = this.productos.find((p) => p.idProducto === id);
    if (!productoEncontrado) {
      throw new Error('No existe el producto con ese ID');
    } else {
      return productoEncontrado;
    }
  }
  crearProducto(desProducto: string) {
    let nuevoProducto: CreateProductoDto;
    nuevoProducto = {
      idProducto: v4(),
      desProducto: desProducto,
    };
    return this.productos.push(nuevoProducto);
  }
  deleteProducto(id:string){
    const resul = this.productos.findIndex((pr)=>pr.idProducto === id)
    if (resul > -1 ){
        this.productos.splice(resul, 1 );
        return true ;
        }else{
            false
            }

    
    
  }
}
