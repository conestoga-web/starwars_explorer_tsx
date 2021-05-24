import React from 'react';
import './Home.css'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonAppBar from '../components/ButtonAppBar';

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
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <div className={classes.root}>
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
        </div>
        
      </section>
    </>  
  );
}

export default Home;