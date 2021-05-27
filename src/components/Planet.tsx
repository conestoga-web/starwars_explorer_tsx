import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      marginBottom: '200px',
      marginTop: '20px',
      [theme.breakpoints.down('sm')]: {
        minWidth: 300,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        maxHeight: 800,
        minWidth: 360,
      },
      [theme.breakpoints.up('md')]: {
        maxHeight: 900,
        minWidth: 500,
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      paddingTop: '56.25%', // 16:9
      marginLeft: '10%',
      marginRight: '10%',
      paddingRight: '20%',
      paddingLeft: '10%',
      paddingBottom: '10%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);

function Planet({ planet, loadingPlanet }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingPlanet && 'Loading...'}
      {!loadingPlanet && planet && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              {bull}{planet.name}{bull}
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image={`images/planets/${planet.name}.jpg`}
              title={planet.name}
            />
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Rotation Period
            </Typography>
            <Typography variant="body1" component="p">
              {planet.rotation_period}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Orbital Period
            </Typography>
            <Typography variant="body1" component="p">
              {planet.orbital_period}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Diameter
            </Typography>
            <Typography variant="body1" component="p">
              {planet.diameter}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Climate
            </Typography>
            <Typography variant="body1" component="p">
              {planet.climate}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Gravity
            </Typography>
            <Typography variant="body1" component="p">
              {planet.gravity}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Terrain
            </Typography>
            <Typography variant="body1" component="p">
              {planet.terrain}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Population
            </Typography>
            <Typography variant="body1" component="p">
              {planet.population}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default Planet;
