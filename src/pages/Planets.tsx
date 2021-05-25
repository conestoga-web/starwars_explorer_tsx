import React from 'react';
import PlanetListContainer from '../containers/PlanetListContainer';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const Planets = ({ planetList }) => {
  const title = "Planets";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <Navigation />
      <div className="container">
        <PlanetListContainer {...planetList}/>
      </div>
    </>
  );
};

export default Planets;
