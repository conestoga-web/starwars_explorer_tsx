import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar'; 
import Navigation from '../components/Navigation';

const Movies = ({ movieList }) => {
  const title = "Movies";
  return (
    <>
      <body>
        <header><ButtonAppBar title={title} /></header>
        <Navigation />
        <div className="container">
          <MovieListContainer {...movieList} />
        </div>
      </body>
    </>
  );
};

export default Movies;
