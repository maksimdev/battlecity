import { randomInteger } from './utils/utils';

import empty from './images/empty.png';
import bricks from './images/bricks.png';
import ice from './images/ice.png';
import trees from './images/trees.png';
import wall from './images/wall.png';
import water from './images/water.png';

const createEmpty = (x, y) => ({id: 0, position: { x: x, y: y }, img: empty })
const createBricks = (x, y) => ({ id: 1, position: { x: x, y: y }, img: bricks });
const createTrees = (x, y) => ({ id: 2, position: { x: x, y: y }, img: trees });
const createIce = (x, y) => ({ id: 3, position: { x: x, y: y }, img: ice });
const createWall = (x, y) => ({ id: 4, position: { x: x, y: y }, img: wall });
const createWater = (x, y) => ({ id: 5, position: { x: x, y: y }, img: water });

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
    default:
      console.log('error id');
      return createEmpty();
  }
}

const randomItem = (x, y) => createItem(randomInteger(0, 3), x, y);

export default (incomingMap) => {
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

  return map;
}