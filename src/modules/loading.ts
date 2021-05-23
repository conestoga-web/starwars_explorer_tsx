import { createAction, handleActions } from 'redux-actions';
import { IAction } from './types';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType: IAction['type']) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType: IAction['type']) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action: IAction) => ({
      ...state,
      [action.payload]: true
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false
    })
  },
  initialState
);

export default loading;
