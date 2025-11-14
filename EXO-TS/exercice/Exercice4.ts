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

function strongest(tab: Pokemon[]) {
  let lvl: number = 0;
  let newName: string = "";

  tab.forEach((e) => {
    if (e.level > lvl) {
      lvl = e.level;
      newName = e.name;
    }
  });
  return [lvl, newName];
}

console.log(strongest(tableau));
