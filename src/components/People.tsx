import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(45deg, #35B62C 30%, #7DFE74 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      marginBottom: '200px',
      marginTop: '20px',
      [theme.breakpoints.down('sm')]: {
        minWidth: 275,
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

function People({ people, loadingPeople }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingPeople && 'Loading...'}
      {!loadingPeople && people && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}{people.name}{bull}
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image={`images/characters/${people.name.replace(/ /g,"_").toLowerCase()}.jpg`}
              title={people.name}
            />
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Height
            </Typography>
            <Typography variant="body1" component="p">
              {people.height}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Mass
            </Typography>
            <Typography variant="body1" component="p">
              {people.mass}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Hair Color
            </Typography>
            <Typography variant="body1" component="p">
              {people.hair_color}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Skin Color
            </Typography>
            <Typography variant="body1" component="p">
              {people.skin_color}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Eye Color
            </Typography>
            <Typography variant="body1" component="p">
              {people.eye_color}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Gender
            </Typography>
            <Typography variant="body1" component="p">
              {people.gender}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Birth Year
            </Typography>
            <Typography variant="body1" component="p">
              {people.birth_year}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default People;
