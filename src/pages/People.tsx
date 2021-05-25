import React from 'react';
import PeopleListContainer from '../containers/PeopleListContainer';
import './Home.css'; 
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const People = ({ peopleList }) => {
  const title = "People";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <Navigation />
      <div className="container">
        <PeopleListContainer {...peopleList}/>
      </div>
    </>
  );
};

export default People;
