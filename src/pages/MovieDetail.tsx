import React from 'react';
import MovieContainer from '../containers/MovieContainer';
import { Route } from 'react-router-dom';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const MovieDetail = ({ loadingMovie }) => {
  const title = "Movie";
  return (
    <>
      <body>
        <header><ButtonAppBar title={title} /></header>
        <Navigation />
        <div className="container">
          <Route
            path="/movie/:id"
            render={({ match }) => <MovieContainer {...loadingMovie} id={match.params.id} />}
          /> 
        </div>
      </body>
    </>
  );
};

export default MovieDetail;