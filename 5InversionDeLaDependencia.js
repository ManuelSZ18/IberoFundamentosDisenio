/*Principio de Inversion de Dependencias*/
/*Ejemplo de una dependicia por concreción y contraria a este principio*/
var shimano = /** @class */ (function () {
    function shimano(shimanoFamily) {
        this.provider = shimanoFamily;
    }
    return shimano;
}());
/*Ejemplo de una dependicia por abstraccion y siguiendo este principio*/
var provider = /** @class */ (function () {
    function provider(provider) {
        this.provider = provider;
    }
    return provider;
}());
var prueba5 = new provider("Shimano");
console.log(prueba5.provider);
