import React from 'react';

const Movie = ({ movie }) =>
{
    return (
        <div className="p-2 group cursor-pointer">
            <img className="responsive" src={`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`} alt="" />
            <h2 className="mt-1 text-2xl text-white group-hover:font-bold">{movie.original_title}</h2>
            <div className="p-2 opacity-0 group-hover:opacity-100">
                <p className="truncate max-w-md">{movie.overview}</p>
                <p>{movie.release_date} Rating: {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default Movie;