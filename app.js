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

// Modificamos los valores finalPrice por newFinalPrice
car1['finalPrice'] = newFinalPriceCar1;
car2['finalPrice'] = newFinalPriceCar2;

// Imprimos por pantalla el nuevo objeto con los precios finales
console.log(car1);
console.log(car2);

// ITERACION 3: Operadores

// 1.1

console.log(10 * 5);

// 1.2

console.log(10 / 2);

// 1.3

console.log(15 % 9);

// 1.4

const p = 10;
const j = 5;

const o = p + j;
console.log(o);

// 1.5

const c = 10;
const m = 5;

const i = c * m;
console.log(i);

// ITERACION 4: Arrays

// 1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 1.2

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1.splice(0, 1, "IRONMAN");

console.log(avengers1);

// 1.3 

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers2.length);

// 1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");

console.log(rickAndMortyCharacters);

// 1.5

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();

console.log(rickAndMortyCharacters1[0] + ", " + rickAndMortyCharacters1[4]);

// 1.6

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1, 1);

console.log(rickAndMortyCharacters2);

// ITERACION 5: Condicionales

// 1.1

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 == 20 && number1 == 10) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 != number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// ITERACION 6: Bucles

// 1.1

const contador = 10;

for (let index = 0; index < contador; index++) {
    console.log(index);
}

// 1.2

const contador1 = 10;

for (let index1 = 0; index1 < contador1; index1++) {
    if(index1 % 2 == 0){
        console.log(index1);
    }
    
}

// 1.3

const contador2 = 10;

for (let index2 = 1; index2 <= contador2; index2++) {
    if(index2 <= 9){
        console.log("Intentando dormir 🐑");
    } else {
        console.log("Dormido!");
    }
    
}




