/* PRINCIPIO DE RESPONSABILIDAD UNICA
    Este principio nos recomienda que una clase o funcion debe centrarse
    especificamente en cumplir con una funcion y por tanto debe existir
    una unica razon para cambiar.

    Este principio exige que todos los metodos o subfunciones tengan alta cohesion.
*/

class bike {
    brand: string;
    sizeFrame: string;

    constructor(brand: string, sizeFrame: string){

        this.brand =  brand;
        this.sizeFrame = sizeFrame;
    }

    getBrand() : string{
        return this.brand;
    }

    getSizeBrand() : string{
        return this.sizeFrame;
    }

    saveBrand(){
        this.brand;
    }

    saveSizeBrand(){
        this.sizeFrame;
    }
}

let prueba = new bike("Shimano", "L");

console.log("Marca: " + prueba.brand );
console.log("Tamaño: " + prueba.sizeFrame );
