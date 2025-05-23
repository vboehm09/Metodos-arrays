//PUSH
let playlist = ["Rap", "Pop", "Trap"];

console.log(`Antes do push:`, playlist);

//Adicionando uma nova música à playlist
playlist.push("R/B");

console.log(`Depois do push:`, playlist);

playlist.push("Hip-Hop");

console.log(`Depois do push:`, playlist);

//POP
let playlist1 = ["Rap", "Pop", "Trap"];

console.log("Antes do pop:", playlist1);

//Removendo a última música da playlist 
let músicaRemovida = playlist1.pop();

console.log("Depois do pop:", playlist1);
console.log("Música removida:", músicaRemovida);

let segundaMusicaRemovida = playlist1.pop();
console.log("Depois do pop:", playlist1);
console.log("Música removida:", segundaMusicaRemovida);




