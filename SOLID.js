/* PRINCIPIO DE RESPONSABILIDAD UNICA
    Este principio nos recomienda que una clase o funcion debe centrarse
    especificamente en cumplir con una funcion y por tanto debe existir
    una unica razon para cambiar.

    Este principio exige que todos los metodos o subfunciones tengan alta cohesion.
*/

class bike {
    constructor(brand, sizeFrame){
    this.brand = brand;
    this.sizeFrame = sizeFrame;
    }

    getBrand(){
        return this.brand;
    }

    getSizeBrand(){
        return this.sizeFrame;
    }

    saveBrand(){
        this.brand;
    }

    saveSizeBrand(){
        this.sizeFrame;
    }
}