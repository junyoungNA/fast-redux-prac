import { createBrowserHistory } from 'history'; // 내부모듈 react-router-dom 설치할때 자동으로 설치?
// thunk.withExtraArgument({ history }); //새로운 미들웨어를 생성?
const history = createBrowserHistory();

export default history;
