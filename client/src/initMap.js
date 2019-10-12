
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

const createEmpty = () => ({id: 0, img: empty })
const createBricks = () => ({ id: 1, img: bricks });
const createIce = () => ({ id: 2, img: ice });
const createTrees = () => ({ id: 3, img: trees });
const createWall = () => ({ id: 4, img: wall });
const createWater = () => ({ id: 5, img: water });

const createPlayer1 = () => ({ id: 6, img: player1 });
const createPlayer2 = () => ({ id: 7, img: player2 });
const createEnemy1 = () => ({ id: 8, img: enemy1 });
const createEnemy2 = () => ({ id: 9, img: enemy2 });
const createEnemy3 = () => ({ id: 10, img: enemy3 });
const createEnemy4 = () => ({ id: 11, img: enemy4 });

//const createBullet = () => ({ id: 12, img: bullet });

const createItem = (id) => {
  switch (id) {
    case 0:
      return createEmpty();
    case 1:
      return createBricks();
    case 2:
      return createIce();
    case 3:
      return createTrees();
    case 4:
      return createWall();
    case 5:
      return createWater();
    case 6:
      return createPlayer1();
    case 7:
      return createPlayer2();
    case 8:
      return createEnemy1();
    case 9:
      return createEnemy2();
    case 10:
      return createEnemy3();
    case 11:
      return createEnemy4();
    // case 12:
    //   return createBullet();
    // break;
    default:
      return createEmpty();
  }
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const randomItem = () => createItem(randomInteger(0, 11));

export default () => ([
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()],
  [randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem(), randomItem()] 
]);