//redux > actions 폴더안에는 api 호출들 다 이 폴더 안에서 해줄 예정
// 리덕스 미들웨어는 함수를 리턴 함, redux-thunk 에서 이렇게 처리하라 시킴
import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async (dispatch, getState) => {
        try{
            dispatch({ type:'GET_MOVIES_REQUEST'});
            
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
            //api 여러개 호출할 때 더 유용
            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([
                popularMovieApi,topRatedApi,upComingApi, genreApi
            ]);
            console.log("grdf",genreList)

            //이제 리듀서로 데이터 보내서 저장시키기
            dispatch({
                type:"GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies:popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upComingMovies: upComingMovies.data,
                    genreList: genreList.data.genres,
                }
            })
        }catch(e){
            //error handling 하는 곳
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    }
}

export const movieAction = {
    getMovies,
}