import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

/**
 * 개발 목록 리스트 정리
 * 1. 페이지는 3개 페이지 필요, 홈페이지/move 페이지, movieDetail 페이지
 *  - router 사용, 여러 페이지를 보여주려면
 * 2. 홈페이지에서 배너를 볼 수 있음
 * 2-1.3가지 섹션의 영화 볼수있음(인기있는 영화, 평점 높은 영화, 업커밍)
 * 2-2. 각 영화에 마우스를 올리면, 제목/장르/점수/인기도/청불여부 정보 제공
 * 2-3. 영화를 슬라이드로 넘기면서 볼 수 있다
 * 
 * 3. 영화 디테일 페이지에서 영화에 대한 디테일 정보 제공(포스터/제목/줄거리/점수/인기도/청불여부/예산/이익/러닝타임 등)
 * 3-1. trailer 를 누르면 trailer 를 볼 수있다(예고편)
 * 3-2. 영화 리뷰도 볼 수 있음
 * 3-3. 관련된 영화도 볼 수 있다
 * 
 * 4. 영화 검색을 할 수 있다
 * 4-1. 영화 정렬 가능
 * 4-2. 영화 필터링 가능
 */

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} /> {/**restful API 에 의해서, path 경로를 설정 */}
      </Routes>
    </div>
  );
}

export default App;
