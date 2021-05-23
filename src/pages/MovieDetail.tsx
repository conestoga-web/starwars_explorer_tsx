import React from 'react';
import MovieContainer from '../containers/MovieContainer';
import { Route } from 'react-router-dom';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar'; 

const MovieDetail = ({ loadingMovie }) => {
  const title = "Movie";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <Route
          path="/movie/:id"
          render={({ match }) => <MovieContainer {...loadingMovie} id={match.params.id} />}
        /> 
      </section>
    </>
  );
};

export default MovieDetail;