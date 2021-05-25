import React from 'react';
import './Home.css'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonAppBar from '../components/ButtonAppBar';
import Navigation from '../components/Navigation';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
}));

function Home() {
  const title = "Star Wars Explorer";
  const classes = useStyles();
  return (
    <>
      <body>
        <header><ButtonAppBar title={title} /></header>
{/*         <section className={classes.root}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
              <Button href="/starwars_explorer_tsx/#/people" style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  color: "#ffffff",
                  padding: "18px 36px",
                  fontSize: "18px"
                }} variant="contained">People</Button><br />
              <Button href="/starwars_explorer_tsx/#/movies" style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  color: "#ffffff",
                  padding: "18px 36px",
                  fontSize: "18px"
                }} variant="contained">Movies</Button><br />
              <Button href="/starwars_explorer_tsx/#/planets" style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  color: "#ffffff",
                  padding: "18px 36px",
                  fontSize: "18px"
                }} variant="contained">Planets</Button>
            </ButtonGroup>
        </section> */}
        <div className="container">
          <Navigation />
          <div className="a-long-time-ago">
              A long time ago, in a galaxy far,<br /> far away..
          </div>

          <div className="crawl">
              <div>
                  <p>
                      It is a period of civil war.
                      Rebel spaceships, striking
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
      </body>
    </>  
  );
}

export default Home;