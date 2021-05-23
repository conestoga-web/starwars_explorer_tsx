//import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiMovies';
import createRequestThunk from '../lib/createRequestThunk';
import { IAction } from './types';

const GET_MOVIES = 'movieList/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movieList/GET_MOVIES_SUCCESS';


export const getMovies = createRequestThunk(GET_MOVIES, api.getMovies);

const initialState = {
  movieList: null
};

/* const movieList = handleActions(
  {
    [GET_MOVIES_SUCCESS]: (state, action) => ({
      ...state,
      movieList: action.payload
    })
  },
  initialState
);
 */
function movieList(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: action.payload
      };

    default:
      return state;
  }
}

export default movieList;
