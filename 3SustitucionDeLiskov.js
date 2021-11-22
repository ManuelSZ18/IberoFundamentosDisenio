/*
    PRINCIPIO DE SUSTITUCION DE LISKOV

    Este principio indica que cuando se usa una clase
    determinada y luego se crea otra clase que extienda de la
    primera, entonces cualquier objeto creado a partir de esta puede
    ser cambiada por la otra, obligando asi a que cualquier clase hija
    no altere el comportamiento de la clase padre.
*/
var montainBike = /** @class */ (function () {
    function montainBike() {
    }
    return montainBike;
}());
var prueba3 = new montainBike;
prueba3.brand = "Shimano";
prueba3.sizeFrame = "S";
prueba3.color = "White";
prueba3.watts = 500;
prueba3.batteryAmp = 20;
console.log(prueba3.brand);
console.log(prueba3.sizeFrame);
console.log(prueba3.color);
console.log(prueba3.watts);
console.log(prueba3.batteryAmp);
