import React from 'react';
import PeopleContainer from '../containers/PeopleContainer';
import { Route } from 'react-router-dom';
import './Home.css'; 
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const PeopleDetail = ({ loadingPeople }) => {
  const title = "Person";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <Navigation />
      <div className="container">
        <Route
          path="/person/:id"
          render={({ match }) => <PeopleContainer {...loadingPeople} id={match.params.id} />}
        />  
      </div>
    </>
  );
};

export default PeopleDetail;