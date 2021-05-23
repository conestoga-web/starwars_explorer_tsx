//import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiPlanets';
import createRequestThunk from '../lib/createRequestThunk';
import { IAction } from './types';

const GET_PLANETS = 'planetList/GET_PLANETS';
const GET_PLANETS_SUCCESS = 'planetList/GET_PLANETS_SUCCESS';


export const getPlanets = createRequestThunk(GET_PLANETS, api.getPlanets);

const initialState = {
  planetList: null
};

/* const planetList = handleActions(
  {
    [GET_PLANETS_SUCCESS]: (state, action) => ({
      ...state,
      planetList: action.payload
    })
  },
  initialState
); */

function planetList(state = initialState, action: IAction){
  switch (action.type) {
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        planetList: action.payload
      };

    default:
      return state;
  }
}

export default planetList;
