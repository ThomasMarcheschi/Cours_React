interface Pokemon {
  name: string;
  type: string;
  level: number;
}

const tableau: Pokemon[] = [
  { name: "abo", type: "poison", level: 16 },
  { name: "ronflex", type: "normal", level: 44 },
  { name: "pikachu", type: "elec", level: 37 },
];

function train(pokemon: Pokemon[]) {
  pokemon.forEach((element) => {
    element.level += 1;
  });
}

console.log(tableau);

train(tableau);

console.log(tableau);
