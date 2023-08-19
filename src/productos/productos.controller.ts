import {
  Controller,
  Get,
  Post,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { Producto } from 'src/modelos/producto.model';
import { ProductosService } from 'src/services/productos/productos.service';
import { Body, Param, Patch, Put } from '@nestjs/common/decorators/http';
import { CreateProductoDto, UpdateProductoDto } from 'src/dto/producto.dto';

@Controller('productos')
export class ProductosController {
  producto: Producto[];
  constructor(private productoService: ProductosService) {}
  @Get('')
  getProduct() {
    return this.productoService
      .getProductos()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  @Get(':id')
  findOne(@Param('id') id: string): Producto {
    return this.productoService.getProductoId(id);
  }
  @Post()
  crearProducto(@Body() nuevoProducto: CreateProductoDto) {
    //console.log('nuevo producto',nuevoProducto)
    return this.productoService.crearProducto(nuevoProducto);
  }
  @Delete(':id')
  deleteProductoById(@Param('id') id: string) {
    const res = this.productoService.deleteProducto(id);
    if (res == true) {
      return `el producto con el ID ${id}, se ha eliminado correctamente`;
    } else {
      throw new NotFoundException(`No existe un producto con ese Id`);
    }
  }
  //@Patch: Partial updating
  @Patch(':id')
  updateProducto(@Param('id')id:string, @Body() updateProducto: UpdateProductoDto){
    return this.productoService.updateProducto(id, updateProducto)
  }
    
}
