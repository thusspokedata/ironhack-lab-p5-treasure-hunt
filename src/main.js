const game = new Game();
const player = new Player();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear()
  game.drawGrid();
  player.drawPlayer();
}

function preload() {
  player.preload();
}

function keyPressed() {
  player.keyPressed()
}
