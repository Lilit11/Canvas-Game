import { canvas, ctx } from "./util.js"
import { ScoreLabel } from "./ScoreLabel.js"

export class Player {
    img = new Image()
    score = new ScoreLabel()

    constructor() {
        this.x = innerWidth / 2
        this.y = innerHeight / 2
        this.w = 50
        this.h = 50
        this.v = 20 // aragutyun

        this.img.src = "./images/player.png"
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    draw() {
        this.img.onload();
        this.score.draw((this.x + this.w / 2), this.y);
    }

    moveLeft() {
        if (this.x <= 0) {
            this.x = 0
        } else {
            this.x -= this.v;
            this.img.src = "./images/player.png"
        }
    }

    moveRight() {
        if (this.x >= innerWidth - this.w) {
            this.x = innerWidth - this.w
        } else {
            this.x += this.v;
            this.img.src = "./images/player_reverse.png"
        }
    }

    moveUp() {
        if (this.y <= 0) {
            this.y = 0;
        } else {
            this.y -= this.v;
        }
    }

    moveDown() {
        if (this.y >= innerHeight - this.h) {
            this.y = innerHeight - this.h;
        } else {
            this.y += this.v
        }
    }

    hitEnemy(score) {
        this.score.scoreLable += score;
    }
}