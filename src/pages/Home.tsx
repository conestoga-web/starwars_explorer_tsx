import React from 'react';
import './Home.css'; 
//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';
import ReactAudioPlayer from 'react-audio-player';

function Home() {
  const title = "Star Wars Explorer";
  return (
    <>
      <body>
        <header><ButtonAppBar title={title} /></header>
        <div className="container">
          <Navigation />
          <div className="a-long-time-ago">
              A long time ago, in a galaxy far,<br /> far away...
          </div>
          <div className="logo">
            <img alt="logo" src="images/Star_Wars_Logo.jpg" />
          </div>
          <div className="crawl">
              <div>
                  <p>
                      It is a period of civil war.
                      Rebel spaceships, strikings
                      from a hidden base, have won
                      their first victory against
                      the evil Galactic Empire.
                  </p>
                  <p>
                      During the battle, Rebel
                      spies managed to steal secret
                      plans to the Empire's
                      ultimate weapon, the DEATH
                      STAR, an armored space
                      station with enough power to
                      destroy an entire planet.
                  </p>
                  <p>
                      Pursued by the Empire's
                      sinister agents, Princess
                      Leia races home aboard her
                      starship, custodian of the
                      stolen plan that can save
                      her people and restore
                      freedom to the galaxy....
                  </p>
              </div>
          </div>
        </div>
        <ReactAudioPlayer
          src="audio/Star-Wars.mp3"
          autoPlay
        />
      </body>
    </>  
  );
}

export default Home;