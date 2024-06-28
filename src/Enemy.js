import { canvas, ctx, grn } from "./util.js"
import { ScoreLabel } from "./ScoreLabel.js"


export class Enemy {
    img = new Image();
    score = new ScoreLabel();

    constructor(score, w, h, v, photo, isRL=true) {
        this.x =isRL? grn(innerWidth, innerWidth + 1500): grn(-1500,0)
        this.y = grn(100, innerHeight - 100)
        this.w = w
        this.h = h
        this.v = v // aragutyun
        this.score.scoreLable = score;

        this.img.src = photo
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    draw() {
        this.img.onload();
        this.score.draw((this.x+this.w/2), this.y);
    }

    moveLeftRight() {
        this.draw();
        if (this.x > innerWidth + 100) {
            this.x = -100;
            this.y = grn(100,innerHeight-100)
        } else {
            this.x += this.v;
        }

    }

    moveRightLeft() {
        this.draw();
        if (this.x < 0 && this.x > -10  ) {
            this.x = innerWidth + 10;
            this.y = grn(100, innerHeight-100)
        } else {
            this.x -= this.v;
        }
    }
}