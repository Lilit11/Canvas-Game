import { canvas, ctx } from "./util.js"

export class ScoreLabel {
    scoreLable = 10;

    draw(x,y) {
        ctx.font = "24px bold";
        ctx.fillStyle = "red";
        ctx.fillText(this.scoreLable, x, y);
    }
}