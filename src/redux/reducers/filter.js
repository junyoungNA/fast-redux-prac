import { SHOW_COMPLETE, SHOW_ALL } from '../action';

const initialState = 'ALL';
export default function filterReducer(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }
  return previousState;
}
