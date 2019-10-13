export default class Player {

  constructor(userId, position = { x: 0, y: 0 }, direction = 'up', img) {
    this.userId = userId;
    this.position = position;
    this.direction = direction;
    this.img = img;
  }

  turn(direction) {
    this.direction = direction;
    return this.direction;
  }
  moveUp() {
    this.position.y = this.position.y !== 0 ? this.position.y - 1 : this.position.y;
    return this.position;
  }
  moveRight() {
    this.position.x = this.position.x !== 13 ? this.position.x + 1 : this.position.x;
    return this.position;
  }
  moveDown() {
    this.position.y = this.position.y !== 13 ? this.position.y + 1 : this.position.y;
    return this.position;
  }
  moveLeft() {
    this.position.x = this.position.x !== 0 ? this.position.x - 1 : this.position.x;
    return this.position;
  }

  move(direction) { //'top', 'right', 'down', 'left'
    switch (direction) {
      case 'up':
        this.turn('up');
        return this.moveUp();
      case 'right':
        this.turn('right');
        return this.moveRight();
      case 'down':
        this.turn('down');
        return this.moveDown();
      case 'left':
        this.turn('left');
        return this.moveLeft();
      default:
        return this.position;
    }
  }
  whereAmI() {
    console.log(`I am here: (x:${this.position.x} y:${this.position.x})`);
  }
}