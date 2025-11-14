let Move: "up" | "down" | "left" | "right";

function moveCharacter(move: string) {
  switch (move) {
    case "ArrowUp":
      Move = "up";
      break;
    case "ArrowDown":
      Move = "down";
      break;
    case "ArrowLeft":
      Move = "left";
      break;
    case "ArrowRight":
      Move = "right";
      break;
  }
  console.log(`Le joueur se déplace vers ${Move}`);
}

moveCharacter("ArrowUp");
moveCharacter("ArrowDown");
moveCharacter("ArrowLeft");
moveCharacter("ArrowRight");
