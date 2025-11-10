// Une fonction pure est une fonction qui, pour les mêmes entrées, retourne toujours le même résultat sans modifier de données externes

// Fonction pure
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2));

// Fonction pas pure
function myAdd(b) {
  return a + b;
}

let a = 10;
console.log(myAdd(2));
