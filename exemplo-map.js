//MAP 
//exemplo 1
let playlist = ["Rap", "Pop", "Trap"];

let clone = playlist.map(item => item); // apena copia os itens

console.log(`Clonagem com map: ${clone.join(', ')}`);

//exemplo 2
let maiuscula = playlist.map(item => item.toUpperCase());

console.log(`Maiúsculas com map: ${maiuscula.join(', ')}`);

//exemplo 3 
let minuscula = playlist.map(item => item.toLowerCase());

console.log(`Minúsculas com map: ${minuscula.join(', ')}`);

//exemplo 4
let numeros = [10, 20, 30, 40, 50];

let dobrados = numeros.map(n => n * 2);
console.log(`Valores dobrados: ${dobrados.join(', ')}`);

let metades = numeros.map(n => n / 2);
console.log(`Valores pela metade: ${metades.join(', ')}`);

let comoTexto = numeros.map(n => `${n} pts`)
console.log(`Como texto: ${comoTexto.join(', ')}`);




