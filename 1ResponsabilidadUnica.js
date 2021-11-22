/* PRINCIPIO DE RESPONSABILIDAD UNICA
    Este principio nos recomienda que una clase o funcion debe centrarse
    especificamente en cumplir con una funcion y por tanto debe existir
    una unica razon para cambiar.

    Este principio exige que todos los metodos o subfunciones tengan alta cohesion.
*/
var bike = /** @class */ (function () {
    function bike(brand, sizeFrame) {
        this.brand = brand;
        this.sizeFrame = sizeFrame;
    }
    bike.prototype.getBrand = function () {
        return this.brand;
    };
    bike.prototype.getSizeBrand = function () {
        return this.sizeFrame;
    };
    bike.prototype.saveBrand = function () {
        this.brand;
    };
    bike.prototype.saveSizeBrand = function () {
        this.sizeFrame;
    };
    return bike;
}());
var prueba = new bike("Shimano", "L");
console.log("Marca: " + prueba.brand);
console.log("Tamaño: " + prueba.sizeFrame);
