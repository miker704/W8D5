import Level from './level'

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }


  animate (ctx) {
    // this.level.animate(this.ctx);
    // this.restart();
    // this.drawBackground(this.ctx);

    this.level.animate(this.ctx);
  }

  restart () {
    this.level = new Level(this.dimensions);
    // this.animate(this.ctx);
    // this.drawBackground(ctx);
    // this.animate(this.ctx)
    this.level.drawBackground(this.ctx);
    this.level.animate(this.ctx);

  }
}