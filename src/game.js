class Game {
  constructor() {
    this.player
    this.playerImage
    
  }

  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE* i, WIDTH);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = 100;
    this.height = 100;
    this.imageDown
  }
  preload() {
    this.imageDown = loadImage('assets/character-down.png')
    this.imageUp = loadImage('assets/character-up.png')
    this.imageLeft = loadImage('assets/character-left.png')
    this.imageRight = loadImage('assets/character-right.png')
    this.image = this.imageDown
  }

  drawPlayer() {
    image(this.image, this.col, this.row, this.width, this.height)
   }

  moveUp() {
    this.row -= 100;
    this.image = this.imageUp
  }
  moveDown() {
    this.row += 100;
    this.image = this.imageDown
  }

  moveLeft() {
    this.col -= 100;
    this.image = this.imageLeft
  }
  moveRight() {
    this.col += 100;
    this.image = this.imageRight
  }
  keyPressed() {
    if (keyIsDown(38)) {
      this.moveUp()
     }

      if (keyIsDown(40)) {
       this.moveDown()
     }

      if (keyIsDown(37)) {
       this.moveLeft()
     }

      if (keyIsDown(39)) {
       this.moveRight()
     }
    }
  }

  class Treasure {
    constructor(col, row) {
      this.col = col
      this.row = row
      this.width = 100;
      this.height = 100;
      this.imageTreasure
    }

    preload() {
      this.imageTreasure = loadImage('assets/treasure.png');
    }

    drawTreasure () {
      image(this.imageTreasure , this.col, this.row, this.width, this.height)
     }
    
    setRandomPosition() {
      this.col = (Math.floor(Math.random() * 10)) * 100 + 10
      this.row = (Math.floor(Math.random() * 10)) * 100 + 10
    }

  }
  