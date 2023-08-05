enum ESTADO{
    ACTIVO=1, 
    INACTIVO=-1

}
export class Producto{
    idProducto?:string;
    desProducto?:string;
    stockUmc?:number;
    stockUmv?:number;
    numCarasProd?:number;
    costoProd?:number;
}
