// ITERACION 1: VARIABLES

// 1.1
 
const myFavoriteHero = "Hulk";

// 1.2

const x = 50;

// 1.3

const h = 5;
const y = 10;

// 1.4

const z = h + y;

// ITERACION 2: VARIABLES AVANZADAS

// 1.1

const character = {name: 'Jack Sparrow', age: 10};
character['age'] = 25;
console.log(character);

// 1.2

const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.")

// 1.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

const suma = toy1['price'] + toy2['price'];
console.log(suma);


// 1.4

let globalBasePrice = 10000;

// Actualizamos el valor de la variable globalBasePrice
globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

// Calculanos los nuevos precios finales para cada coche: basePrice + globalPrice
const newFinalPriceCar1 = car1['basePrice'] + globalBasePrice;
const newFinalPriceCar2 = car2['basePrice'] + globalBasePrice;

// Eliminamos del objeto el finalPrice y añadimos el newFinalPrice
car1['finalPrice'] = newFinalPriceCar1;
car2['finalPrice'] = newFinalPriceCar2;

console.log(car1);
console.log(car2);






