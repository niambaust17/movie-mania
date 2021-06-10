import React, { useState } from 'react';
import Movie from '../Movie/Movie';


const Movies = () =>
{
    const [movies, setMovies] = useState([]);
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=04b57bb94c48955990ef459d61b479d2&language=en-US&page=2')
        .then(res => res.json())
        .then(data => setMovies(data.results))

    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export default Movies;