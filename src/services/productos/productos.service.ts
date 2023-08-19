import { Injectable } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from 'src/dto/producto.dto';
import { ESTADO } from 'src/entity/producto.entity';
import { PRODUCTOS } from 'src/mocks/producto.mock';
import { Producto } from 'src/modelos/producto.model';
import { v4 } from 'uuid';

@Injectable()
export class ProductosService {
  productos: Producto[] = PRODUCTOS;
  constructor() {}
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
  crearProducto(producto) {
    let nuevoProducto: CreateProductoDto;
    nuevoProducto = {
      idProducto: v4(),
      desProducto: producto.desProducto,
      costoProd: producto.costoProd,
      estado: ESTADO.CREADO,
    };
    return this.productos.push(nuevoProducto);
  }
  deleteProducto(id: string) {
    const resul = this.productos.findIndex((pr) => pr.idProducto === id);
    if (resul > -1) {
      this.productos.splice(resul, 1);
      return true;
    } else {
      false;
    }
  }
  updateProducto(id: string, productoUpdated: UpdateProductoDto) {
    let productoEncontrado = this.productos.find((p) => p.idProducto === id);
    let nuevoProducto = Object.assign(productoEncontrado, productoUpdated);
    this.productos.map((p) =>
      p.idProducto === id ? nuevoProducto : productoEncontrado,
    );
    return nuevoProducto;
  }
}
