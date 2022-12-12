// Ejercicio 1

var n1,n2,n3,n4,n5,t,mayor;
n1 = parseInt(prompt("Número 1"));
n2 = parseInt(prompt("Número 2"));
n3 = parseInt(prompt("Número 3"));
n4 = parseInt(prompt("Número 4"));
n5 = parseInt(prompt("Número 5"));

if (n1 > n2) {
    t = n1;
}else{
    t = n2;
}

if (n2 > n3) {
    t = n2;
}else{
    t = n3;
}

if (n3 > n4) {
    t = n3;
}else{
    t = n4;
}

if (n4 > n5) {
    t = n4;
}else{
    t = n5;
}

// if (n5 > t) {
//     mayor = n5;
// }else{
//     mayor = t;
// }

document.write("El mayor es "+ t);


// opcion 2 de ejercicio 1

let array = [3,5,7,1,6];
let mayor = 0;

for (let index = 0; index < array.length; index++) {
    if (array[index] > mayor) {
        mayor = array[index];
       
    };
    
    
}
console.log(mayor);


// function MyMax(myarr){
// var al = myarr.length;
// maximum = myarr[al-1];
// while (al--){
// if(myarr[al] > maximum){
//     maximum = myarr[al]
// }
// }
//     return maximum;
// };
// var myArray = [3, 5, 7, 1, 6];
// var m = MyMax(myArray);
// console.log(m)

//Ejercicio 2
let arrayy = [3,5,7,1,6];
let mayor = 0;

for (let index = 0; index < arrayy.length; index++) {
    if (arrayy[index] > mayor) {
        mayor = arrayy[index];
       
    };
    
    
}
console.log(mayor);

