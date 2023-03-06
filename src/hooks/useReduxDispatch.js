import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContexts';

export default function useReduxDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}
