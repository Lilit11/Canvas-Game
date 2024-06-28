import { canvas, ctx } from "./util.js";


export class Decoration {

    img = new Image()

    constructor(x, y, w, h, photo) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.img.src = photo
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }


    draw() {
        this.img.onload()
    }

    move() {
        this.draw()

        if (this.y <= -10) {
            this.y = innerHeight - 20
        } else {
            this.y -= 2;

        }
    }
}