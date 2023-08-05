import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from 'src/services/productos/productos.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService]
  
})
export class ProductosModule {}
