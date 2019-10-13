import player1 from '../images/player1.png';

const defaultState = {
  player: {
    userId: 12345,
    position: {
      x: 0,
      y: 0
    },
    direction: 'up',
    img: player1
  },
  action: {}
};

export function controlReducer(state = defaultState, action) {
  switch (action.type) {
    case 'MOVE_UP':
      return { 
        ...state,
        player: {
          ...state.player,
          position: {
            x: state.player.position.x,
            y: state.player.position.y !== 0 ? state.player.position.y - 1 : state.player.position.y
          },
          direction: 'up'
        },
        action: action
      }
    case 'MOVE_RIGHT':
      return { 
        ...state,
        player: {
          ...state.player,
          position: {
            x: state.player.position.x !== 12 ? state.player.position.x + 1 : state.player.position.x,
            y: state.player.position.y
          },
          direction: 'right'
        },
        action: action
      }
    case 'MOVE_DOWN':
      return { 
        ...state,
        player: {
          ...state.player,
          position: {
            x: state.player.position.x,
            y: state.player.position.y !== 12 ? state.player.position.y + 1 : state.player.position.y
          },
          direction: 'down'
        },
        action: action
      }
    case 'MOVE_LEFT':
      return { 
        ...state,
        player: {
          ...state.player,
          position: {
            x: state.player.position.x !== 0 ? state.player.position.x - 1 : state.player.position.x,
            y: state.player.position.y
          },
         direction: 'left'
        },
        action: action
      }
    default:
      return state
  }
}

//actions

export const moveUp = () => ({ type: 'MOVE_UP' });
export const moveRight = () => ({ type: 'MOVE_RIGHT' });
export const moveDown = () => ({ type: 'MOVE_DOWN' });
export const moveLeft = () => ({ type: 'MOVE_LEFT' });