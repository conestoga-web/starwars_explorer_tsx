import React from 'react';
import PlanetContainer from '../containers/PlanetContainer';
import { Route } from 'react-router-dom';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const PlanetDetail = ({ loadingPlanet }) => {
  const title = "Planet";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <Navigation />
      <div className="container">
        <Route
          path="/planet/:id"
          render={({ match }) => <PlanetContainer {...loadingPlanet} id={match.params.id} />}
        />  
      </div>
    </>
  );
};

export default PlanetDetail;