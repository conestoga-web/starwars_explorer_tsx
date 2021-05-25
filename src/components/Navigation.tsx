import React from 'react';
import './Navigation.css';
//import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, Theme } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(),
      },
    },
  },
}));

function Navigation() {
  const classes = useStyles();
  return (
    <>
{/*       <div>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/movies">Movies</Link>
      </div> */}
      <div className="nav">
        <section className={classes.root}>
          <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained primary button group"
              variant="contained"
          >
            <Button href="/starwars_explorer_tsx/#/people" style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                color: "#ffffff",
                fontSize: "15px"
              }} variant="contained">People</Button>
            <Button href="/starwars_explorer_tsx/#/movies" style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                color: "#ffffff",
                fontSize: "15px"
              }} variant="contained">Movies</Button>
            <Button href="/starwars_explorer_tsx/#/planets" style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                color: "#ffffff",
                fontSize: "15px"
              }} variant="contained">Planets</Button>
          </ButtonGroup>
        </section>
      </div>
    </>  
  );
}

export default Navigation;