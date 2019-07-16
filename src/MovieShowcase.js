import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
      return movieData.map((data)=> {
       return < MovieCard title={data.title}
                          IMDBRating={data.IMDBRating}
                          genres={data.genres}
                          poster={data.poster}
              />
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>

  }
}

// export default class MovieShowcase extends Component {
// 	generateMovieCards = () => {
// 		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
// 	};
//
// 	render() {
// 		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
// 	}
// }
