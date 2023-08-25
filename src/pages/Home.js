import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    //reducer 에서 데이터 가져오기
    const { popularMovies, 
        topRatedMovies, 
        upComingMovies,
        loading
    } = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        //리덕스에서 api 호출하려면 -> 리덕스 미들웨어!
        dispatch(movieAction.getMovies());

    }, []);

    /**
     * 로딩 스피너 로직
     * 1. loading =true -> loading 스피너 보여주고
     * 2. false -> 데이터보여주기
     * 
     * true : data 도착 전
     * false : data 도착 후 , 에러났을때
     */
    if(loading) {
      <ClipLoader
        color="#fff"
        loading={loading}
        size={150}
      />
    }
  return (
    <div className='home'>
      { loading 
        ? <ClipLoader color="#fff" loading={loading} size={150} />
        : <>
            <Banner movie={popularMovies.results[0]} />

            <h1>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies}/>
            <h1>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies}/>
          </>
      }
    </div>
  )
}

export default Home
