import Player from './player/Player';

import player1 from './images/player1.png';
import player2 from './images/player2.png';
import enemy1 from './images/enemy1.png';
import enemy2 from './images/enemy2.png';
import enemy3 from './images/enemy3.png';
import enemy4 from './images/enemy4.png';
import empty from './images/empty.png';
import bricks from './images/bricks.png';
import ice from './images/ice.png';
import trees from './images/trees.png';
import wall from './images/wall.png';
import water from './images/water.png';
//import bullet from './images/bullet.png';

const createEmpty = (x, y) => ({id: 0, position: { x: x, y: y }, img: empty })
const createBricks = (x, y) => ({ id: 1, position: { x: x, y: y }, img: bricks });
const createTrees = (x, y) => ({ id: 2, position: { x: x, y: y }, img: trees });
const createIce = (x, y) => ({ id: 3, position: { x: x, y: y }, img: ice });
const createWall = (x, y) => ({ id: 4, position: { x: x, y: y }, img: wall });
const createWater = (x, y) => ({ id: 5, position: { x: x, y: y }, img: water });

const createPlayer1 = (x, y) => new Player(1, { x: x, y: y }, undefined, player1);  //({ id: 6, img: player1, userId: 0, direction: 'top' });
//const createPlayer2 = (x, y) => new Player(2, { x: x, y: y }, undefined, player2);  //({ id: 6, img: player1, userId: 0, direction: 'top' });
// const createEnemy1 = () => ({ id: 8, img: enemy1 });
// const createEnemy2 = () => ({ id: 9, img: enemy2 });
// const createEnemy3 = () => ({ id: 10, img: enemy3 });
// const createEnemy4 = () => ({ id: 11, img: enemy4 });

//const createBullet = () => ({ id: 12, img: bullet });

export const createItem = (id, x, y) => {
  switch (id) {
    case 0:
      return createEmpty(x, y);
    case 1:
      return createBricks(x, y);
    case 2:
      return createTrees(x, y);
    case 3:
      return createIce(x, y);
    case 4:
      return createWall(x, y);
    case 5:
      return createWater(x, y);
    case 6:
      return createPlayer1(x, y);
    // case 7:
    //   return createPlayer2(x, y);
    // case 8:
    //   return createEnemy1();
    // case 9:
    //   return createEnemy2();
    // case 10:
    //   return createEnemy3();
    // case 11:
    //   return createEnemy4();
    // case 12:
    //   return createBullet();
    // break;
    default:
      console.log('error id');
      return createEmpty();
  }
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const randomItem = (x, y) => createItem(randomInteger(0, 3), x, y);

export default (player) => {
  const emptyMap = [
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{},{},{},{},{},{},{}]
  ];
  const map = emptyMap.map((rows, x) => rows.map((item, y) => randomItem(x, y)));

  const player1 = createItem(6, randomInteger(0, 13), randomInteger(0, 13));

  map[player1.position.x][player1.position.y] = player1;

  return map;
}