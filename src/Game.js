import { Decoration } from "./Decoration.js";
import { canvas, ctx, grn } from "./util.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";

export class Game {
    
    playBtn = new Decoration(innerWidth / 3, innerHeight / 3 - 50, 500, 400, "./images/playIcon.png");
    playAgainBtn = new Decoration(innerWidth / 2 - 100, innerHeight / 2 + 150, 200, 200, "./images/playAgain.png");

    exitBtn = new Decoration(innerWidth / 2 - 200, innerHeight / 2 + 200, 80, 75, "./images/exitBtn.png");
    nextLevelBtn = new Decoration(innerWidth / 2 + 20, innerHeight / 2 + 210, 80, 65, "./images/nextBtn.png");

    gameOverBtn = new Decoration(innerWidth / 2 - 300, innerHeight / 2 - 250, 600, 350, "./images/gameOver.png")
    levelCompleteBtn = new Decoration(innerWidth / 2 - 300, innerHeight / 2 - 250, 450, 300, "./images/levelComplete.png")

    homePageBg = new Decoration(0, 0, canvas.width, canvas.height, "./images/backgrounds/homePage.jpg")
    level1Bg = new Decoration(0, 0, canvas.width, canvas.height, "./images/backgrounds/level1.jpg")
    level2Bg = new Decoration(0, 0, canvas.width, canvas.height, "./images/backgrounds/level2.jpg")

    bubblesSmall = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 15, 15, "./images/bubble.png"))
    bubblesMedium = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 30, 30, "./images/bubble.png"))
    bubblesBig = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 45, 45, "./images/bubble.png"))

    eatingSound = new Audio("./sound/eating.mp3")
    gameOverSound = new Audio("./sound/game-over.mp3")
    playSound = new Audio("./sound/play.mp3")
    winSound = new Audio("./sound/level-win.mp3")

    player = new Player();
    enemies1RL = [
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_1.png",),
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_2.png"),
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_3.png"),
        new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/RL/10_1.png"),
        new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/RL/10_2.png"),
        new Enemy(25, 60, 60, grn(1, 3), "./images/score_5_50/RL/25_1.png"),
        new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/RL/45_1.png"),
        new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/RL/45_2.png")
    ];
    enemies1LR = [
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_1.png", false),
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_2.png", false),
        new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_3.png", false),
        new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/LR/10_1.png", false),
        new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/LR/10_2.png", false),
        new Enemy(25, 60, 60, grn(1, 3), "./images/score_5_50/LR/25_1.png", false),
        new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/LR/45_1.png", false),
        new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/LR/45_2.png", false)
    ];
    enemies2RL = [
        new Enemy(75, 80, 80, grn(1, 3), "./images/score_50_250/RL/75_1.png"),
        new Enemy(105, 95, 95, grn(1, 3), "./images/score_50_250/RL/105_1.png"),
        new Enemy(175, 105, 105, grn(1, 3), "./images/score_50_250/RL/175_1.png"),
        new Enemy(250, 125, 125, grn(1, 3), "./images/score_50_250/RL/250_1.png"),
        new Enemy(500, 150, 150, grn(1, 3), "./images/score_50_250/RL/500_1.png"),
        new Enemy(1000, 180, 180, grn(1, 3), "./images/score_50_250/RL/1000_1.png"),
    ];
    enemies2LR = [
        new Enemy(75, 80, 80, grn(1, 3), "./images/score_50_250/LR/75_1.png", false),
        new Enemy(105, 95, 95, grn(1, 3), "./images/score_50_250/LR/105_1.png", false),
        new Enemy(175, 105, 105, grn(1, 3), "./images/score_50_250/LR/175_1.png", false),
        new Enemy(250, 125, 125, grn(1, 3), "./images/score_50_250/LR/250_1.png", false),
        new Enemy(500, 150, 150, grn(1, 3), "./images/score_50_250/LR/500_1.png", false),
        new Enemy(1000, 180, 180, grn(1, 3), "./images/score_50_250/LR/1000_1.png", false),

    ]

    enemies2L1RL = [
        new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/RL/5_1.png"),
        new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/RL/5_2.png"),
        new Enemy(10, 50, 50, grn(1, 5), "./images/level2/score_5_100/RL/10_1.png"),
        new Enemy(25, 60, 60, grn(1, 5), "./images/level2/score_5_100/RL/25_1.png"),
        new Enemy(40, 70, 70, grn(1, 5), "./images/level2/score_5_100/RL/40_1.png"),
        new Enemy(50, 80, 80, grn(1, 5), "./images/level2/score_5_100/RL/50_1.png"),
        new Enemy(70, 90, 90, grn(1, 5), "./images/level2/score_5_100/RL/70_1.png"),
        new Enemy(80, 95, 95, grn(1, 5), "./images/level2/score_5_100/RL/80_1.png"),
        new Enemy(100, 100, 100, grn(1, 5), "./images/level2/score_5_100/RL/100_1.png")

    ];
    enemies2L1LR = [
        new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/LR/5_1.png", false),
        new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/LR/5_2.png", false),
        new Enemy(10, 50, 50, grn(1, 5), "./images/level2/score_5_100/LR/10_1.png", false),
        new Enemy(25, 60, 60, grn(1, 5), "./images/level2/score_5_100/LR/25_1.png", false),
        new Enemy(40, 70, 70, grn(1, 5), "./images/level2/score_5_100/LR/40_1.png", false),
        new Enemy(50, 80, 80, grn(1, 5), "./images/level2/score_5_100/LR/50_1.png", false),
        new Enemy(70, 90, 90, grn(1, 5), "./images/level2/score_5_100/LR/70_1.png", false),
        new Enemy(80, 95, 95, grn(1, 5), "./images/level2/score_5_100/LR/80_1.png", false),
        new Enemy(100, 100, 100, grn(1, 5), "./images/level2/score_5_100/LR/100_1.png", false)

    ];
    enemies2L2RL = [
        new Enemy(150, 105, 105, grn(1, 5), "./images/level2/score_100_1000/RL/150_1.png"),
        new Enemy(160, 110, 110, grn(1, 5), "./images/level2/score_100_1000/RL/160_1.png"),
        new Enemy(205, 120, 120, grn(1, 5), "./images/level2/score_100_1000/RL/205_1.png"),
        new Enemy(300, 125, 125, grn(1, 5), "./images/level2/score_100_1000/RL/300_1.png"),
        new Enemy(400, 150, 150, grn(1, 5), "./images/level2/score_100_1000/RL/400_1.png"),
        new Enemy(1000, 180, 180, grn(1, 5), "./images/level2/score_100_1000/RL/1000_1.png")
    ];
    enemies2L2LR = [
        new Enemy(150, 105, 105, grn(1, 5), "./images/level2/score_100_1000/LR/150_1.png", false),
        new Enemy(160, 110, 110, grn(1, 5), "./images/level2/score_100_1000/LR/160_1.png", false),
        new Enemy(205, 120, 120, grn(1, 5), "./images/level2/score_100_1000/LR/205_1.png", false),
        new Enemy(300, 125, 125, grn(1, 5), "./images/level2/score_100_1000/LR/300_1.png", false),
        new Enemy(400, 150, 150, grn(1, 5), "./images/level2/score_100_1000/LR/400_1.png", false),
        new Enemy(1000, 180, 180, grn(1, 5), "./images/level2/score_100_1000/LR/1000_1.png", false)
    ];
    constructor() {
        this.start()
    }
    running = true;
    delta = 0.5;
    temp = 0;
    level = 0;
    start() {
        this.id = requestAnimationFrame(() => this.run())

        window.onkeydown = e => {
            if (this.running) {
                if (e.key == "ArrowLeft") {
                    this.player.moveLeft();
                }
                if (e.key == "ArrowRight") {
                    this.player.moveRight();
                }
                if (e.key == "ArrowUp") {
                    this.player.moveUp();
                }
                if (e.key == "ArrowDown") {
                    this.player.moveDown();
                }
            }
        }
    }

    listener = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.playBtn.x && x < this.playBtn.x + this.playBtn.w && y >= this.playBtn.y && y < this.playBtn.y + this.playBtn.h) {
            this.level = 1;
            this.playSound.play()
        }
    }

    
    run() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.id = requestAnimationFrame(() => this.run());

        if (this.level == 0) {
            this.HomePage();
            window.addEventListener("click", this.listener);
        } else if (this.level == 1) {
            this.Level1();
        } else if (this.level == 2) {
            this.Level2();
        }
    }

    HomePage() {
        this.homePageBg.draw();
        this.bubbleMoving()
        this.playBtnAnim()
    }

    Level1() {
        window.removeEventListener("click", this.listener);
        this.level1Bg.draw();
        this.bubbleMoving()
        this.player.draw();
        this.enemies1RL.forEach(enemy => enemy.moveRightLeft());
        this.enemies1LR.forEach(enemy => enemy.moveLeftRight());

        if (this.player.score.scoreLable > 75) {
            this.enemies2RL.forEach(enemy => enemy.moveRightLeft());
            this.enemies2LR.forEach(enemy => enemy.moveLeftRight());
        }
        this.showScore();
        if (this.player.score.scoreLable > 1000) {
            this.winSound.play()
            this.level = 2;
            this.showNextLevel();
            this.running = false;
        }
        this.hitting();



    }

    Level2() {
        window.removeEventListener("click", this.listenerNextLevel);
        window.removeEventListener("click", this.listenerExitBtn);
        this.level2Bg.draw();
        this.bubbleMoving()
        this.player.draw();
        this.enemies2L1RL.forEach(enemy => enemy.moveRightLeft());
        this.enemies2L1LR.forEach(enemy => enemy.moveLeftRight());

        if (this.player.score.scoreLable > 75) {
            this.enemies2L2RL.forEach(enemy => enemy.moveRightLeft());
            this.enemies2L2LR.forEach(enemy => enemy.moveLeftRight());
        }


        this.hitting()
        this.showScore();

    }

    showNextLevel() {
        window.removeEventListener("click", this.listenerExitBtn);
        cancelAnimationFrame(this.id);
        this.levelCompleteBtn.draw()
        this.exitBtn.draw();
        window.addEventListener("click", this.listenerExitBtn);
        this.nextLevelBtn.draw();
        window.addEventListener("click", this.listenerNextLevel);
    }

    listenerExitBtn = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.exitBtn.x && x < this.exitBtn.x + this.exitBtn.w && y >= this.exitBtn.y && y < this.exitBtn.y + this.exitBtn.h) {
            this.remover();
            this.start();
            this.running = true;
        }
    }

    listenerNextLevel = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.nextLevelBtn.x && x < this.nextLevelBtn.x + this.nextLevelBtn.w && y >= this.nextLevelBtn.y && y < this.nextLevelBtn.y + this.nextLevelBtn.h) {
            this.remover();
            this.playSound.play()
            this.level = 2;
            this.start();
            this.running = true;
        }
    }

    listenerPlayAgain = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.playAgainBtn.x && x < this.playAgainBtn.x + this.playAgainBtn.w && y >= this.playAgainBtn.y && y < this.playAgainBtn.y + this.playAgainBtn.h) {
            this.playAgain()
        }
    }

    processHitting = (en) => {
        let { x, y, w, h } = this.player;
        let delta = 5
        if (x + w - delta >= en.x + delta && x + delta <= en.x + en.w - delta && y - delta + h >= en.y + delta && y + delta <= en.y + en.h - delta) {
            if (en.score.scoreLable <= this.player.score.scoreLable) {
                this.eatingSound.play()
                this.player.hitEnemy(en.score.scoreLable);
                en.x = innerWidth + 15;
                en.y = grn(100, innerHeight - 100)
            } else {
                this.gameOverSound.play()
                cancelAnimationFrame(this.id);
                this.showGameOver();
                this.playAgainBtn.draw();
                window.addEventListener("click", this.listenerPlayAgain)
                this.running = false;
            }

        }
    }

    hitting() {
        if (this.level == 1) {
            this.enemies1LR.forEach(en => this.processHitting(en))
            this.enemies1RL.forEach(en => this.processHitting(en))
            this.enemies2LR.forEach(en => this.processHitting(en))
            this.enemies2RL.forEach(en => this.processHitting(en))
        } else if (this.level == 2) {
            this.enemies2L1LR.forEach(en => this.processHitting(en))
            this.enemies2L1RL.forEach(en => this.processHitting(en))
            this.enemies2L2LR.forEach(en => this.processHitting(en))
            this.enemies2L2RL.forEach(en => this.processHitting(en))
        }

    }

    showGameOver() {
        this.gameOverBtn.draw()
    }

    showScore() {
        ctx.font = "50px bold";
        ctx.fillStyle = "white";
        ctx.fillText(("Score  " + this.player.score.scoreLable), 50, 80);

        if (this.level == 1) {
            ctx.font = "50px bold";
            ctx.fillStyle = "white";
            ctx.fillText(("Your goal is 1000"), 500, 80);

        } else {
            ctx.font = "50px bold";
            ctx.fillStyle = "white";
            ctx.fillText(("Just have fun!"), 500, 80);
        }
    }

    remover() {
        window.removeEventListener("click", this.listenerNextLevel);
        window.removeEventListener("click", this.listenerExitBtn);
        window.removeEventListener("click", this.listenerPlayAgain);
        this.level = 0;

        this.enemies1RL = [
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_1.png",),
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_2.png"),
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/RL/5_3.png"),
            new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/RL/10_1.png"),
            new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/RL/10_2.png"),
            new Enemy(25, 60, 60, grn(1, 3), "./images/score_5_50/RL/25_1.png"),
            new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/RL/45_1.png"),
            new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/RL/45_2.png")
        ];
        this.enemies1LR = [
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_1.png", false),
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_2.png", false),
            new Enemy(5, 40, 40, grn(1, 3), "./images/score_5_50/LR/5_3.png", false),
            new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/LR/10_1.png", false),
            new Enemy(10, 50, 50, grn(1, 3), "./images/score_5_50/LR/10_2.png", false),
            new Enemy(25, 60, 60, grn(1, 3), "./images/score_5_50/LR/25_1.png", false),
            new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/LR/45_1.png", false),
            new Enemy(45, 70, 70, grn(1, 3), "./images/score_5_50/LR/45_2.png", false)
        ];
        this.enemies2RL = [
            new Enemy(75, 80, 80, grn(1, 3), "./images/score_50_250/RL/75_1.png"),
            new Enemy(105, 95, 95, grn(1, 3), "./images/score_50_250/RL/105_1.png"),
            new Enemy(175, 105, 105, grn(1, 3), "./images/score_50_250/RL/175_1.png"),
            new Enemy(250, 125, 125, grn(1, 3), "./images/score_50_250/RL/250_1.png"),
            new Enemy(500, 150, 150, grn(1, 3), "./images/score_50_250/RL/500_1.png"),
            new Enemy(1000, 180, 180, grn(1, 3), "./images/score_50_250/RL/1000_1.png"),
        ];
        this.enemies2LR = [
            new Enemy(75, 80, 80, grn(1, 3), "./images/score_50_250/LR/75_1.png", false),
            new Enemy(105, 95, 95, grn(1, 3), "./images/score_50_250/LR/105_1.png", false),
            new Enemy(175, 105, 105, grn(1, 3), "./images/score_50_250/LR/175_1.png", false),
            new Enemy(250, 125, 125, grn(1, 3), "./images/score_50_250/LR/250_1.png", false),
            new Enemy(500, 150, 150, grn(1, 3), "./images/score_50_250/LR/500_1.png", false),
            new Enemy(1000, 180, 180, grn(1, 3), "./images/score_50_250/LR/1000_1.png", false),

        ]



        this.enemies2L1RL = [
            new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/RL/5_1.png"),
            new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/RL/5_2.png"),
            new Enemy(10, 50, 50, grn(1, 5), "./images/level2/score_5_100/RL/10_1.png"),
            new Enemy(25, 60, 60, grn(1, 5), "./images/level2/score_5_100/RL/25_1.png"),
            new Enemy(40, 70, 70, grn(1, 5), "./images/level2/score_5_100/RL/40_1.png"),
            new Enemy(50, 80, 80, grn(1, 5), "./images/level2/score_5_100/RL/50_1.png"),
            new Enemy(70, 90, 90, grn(1, 5), "./images/level2/score_5_100/RL/70_1.png"),
            new Enemy(80, 95, 95, grn(1, 5), "./images/level2/score_5_100/RL/80_1.png"),
            new Enemy(100, 100, 100, grn(1, 5), "./images/level2/score_5_100/RL/100_1.png")

        ];
        this.enemies2L1LR = [
            new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/LR/5_1.png", false),
            new Enemy(5, 40, 40, grn(1, 5), "./images/level2/score_5_100/LR/5_2.png", false),
            new Enemy(10, 50, 50, grn(1, 5), "./images/level2/score_5_100/LR/10_1.png", false),
            new Enemy(25, 60, 60, grn(1, 5), "./images/level2/score_5_100/LR/25_1.png", false),
            new Enemy(40, 70, 70, grn(1, 5), "./images/level2/score_5_100/LR/40_1.png", false),
            new Enemy(50, 80, 80, grn(1, 5), "./images/level2/score_5_100/LR/50_1.png", false),
            new Enemy(70, 90, 90, grn(1, 5), "./images/level2/score_5_100/LR/70_1.png", false),
            new Enemy(80, 95, 95, grn(1, 5), "./images/level2/score_5_100/LR/80_1.png", false),
            new Enemy(100, 100, 100, grn(1, 5), "./images/level2/score_5_100/LR/100_1.png", false)

        ];
        this.enemies2L2RL = [
            new Enemy(150, 105, 105, grn(1, 5), "./images/level2/score_100_1000/RL/150_1.png"),
            new Enemy(160, 110, 110, grn(1, 5), "./images/level2/score_100_1000/RL/160_1.png"),
            new Enemy(205, 120, 120, grn(1, 5), "./images/level2/score_100_1000/RL/205_1.png"),
            new Enemy(300, 125, 125, grn(1, 5), "./images/level2/score_100_1000/RL/300_1.png"),
            new Enemy(400, 150, 150, grn(1, 5), "./images/level2/score_100_1000/RL/400_1.png"),
            new Enemy(1000, 180, 180, grn(1, 5), "./images/level2/score_100_1000/RL/1000_1.png")
        ];
        this.enemies2L2LR = [
            new Enemy(150, 105, 105, grn(1, 5), "./images/level2/score_100_1000/LR/150_1.png", false),
            new Enemy(160, 110, 110, grn(1, 5), "./images/level2/score_100_1000/LR/160_1.png", false),
            new Enemy(205, 120, 120, grn(1, 5), "./images/level2/score_100_1000/LR/205_1.png", false),
            new Enemy(300, 125, 125, grn(1, 5), "./images/level2/score_100_1000/LR/300_1.png", false),
            new Enemy(400, 150, 150, grn(1, 5), "./images/level2/score_100_1000/LR/400_1.png", false),
            new Enemy(1000, 180, 180, grn(1, 5), "./images/level2/score_100_1000/LR/1000_1.png", false)
        ];

        this.bubblesSmall = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 15, 15, "./images/bubble.png"))
        this.bubblesMedium = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 30, 30, "./images/bubble.png"))
        this.bubblesBig = new Array(10).fill(null).map(() => new Decoration(grn(10, canvas.width - 30), grn(10, canvas.height - 30), 45, 45, "./images/bubble.png"))
        this.player.x = innerWidth / 2
        this.player.y = innerHeight / 2
        this.player.w = 50
        this.player.h = 50
        this.player.v = 10
        this.player.score.scoreLable = 10;

    }
    playAgain() {
        this.remover();
        this.start();
        this.running = true;
    }

    bubbleMoving() {

        this.bubblesSmall.forEach(elm => elm.move())
        this.bubblesMedium.forEach(elm => elm.move())
        this.bubblesBig.forEach(elm => elm.move())
    }
   
    playBtnAnim() {
        this.playBtn.draw()

        if (++this.temp >= 20) {
            this.playBtn.x -= this.delta
            this.playBtn.y -= this.delta
            this.playBtn.w += this.delta
            this.playBtn.h += this.delta
        }
        if (this.playBtn.w > 550) {
            this.delta = -this.delta
        }
        if (this.playBtn.w < 500) {
            this.delta = -this.delta


        }


    }


}

