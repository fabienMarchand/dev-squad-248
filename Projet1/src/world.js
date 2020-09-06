import {Player} from "./player.js";

export class World {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  initGame() {
    const playerStart = new Player();
    playerStart.play();

  }
}