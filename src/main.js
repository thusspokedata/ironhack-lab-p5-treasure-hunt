let x = (Math.floor(Math.random() * 10)) * 100 + 10
let y = (Math.floor(Math.random() * 10)) * 100 + 10
const game = new Game();
const player = new Player(0,0);
const treasure = new Treasure(x, y);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear()
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

function preload() {
  player.preload();
  treasure.preload();
}

function keyPressed() {
  player.keyPressed()
}
