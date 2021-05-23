//import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiMovies';
import createRequestThunk from '../lib/createRequestThunk';
import { IAction } from './types';

const GET_MOVIE = 'movie/GET_MOVIE';
const GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS';

export const getMovieById = createRequestThunk(GET_MOVIE, api.getMovie);

const initialState = {
  movie: null
};

/* const movie = handleActions(
  {
    [GET_MOVIE_SUCCESS]: (state, action) => ({
      ...state,
      movie: action.payload
    })
  },
  initialState
); */

function movie(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload
      };

    default:
      return state;
  }
}

export default movie;
