import React from 'react'

//https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/lbJG35jQE6erMW68YmQ1moE8TZQ.jpg
const Banner = ({movie}) => {
    console.log(movie)
  return (
    <div className='banner' 
        style={{ backgroundImage: 
        "url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`+")"}}>
        
        <div className='banner-info'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Banner
