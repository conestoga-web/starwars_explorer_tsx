import { startLoading, finishLoading } from '../modules/loading';
import { IAction } from '../modules/types';
import { Store } from 'redux';

export default function createRequestThunk(type: IAction["type"], request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params: number | undefined) => async (dispatch: Store["dispatch"]) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}

