import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '95%',
      minWidth: 275,
      maxWidth: 350,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      marginBottom: '30px',
  /*     height: 48,
      padding: '0 30px', */
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
      height: 200,
      paddingTop: '56.25%', // 16:9
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

function Movie({ movie, loadingMovie }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingMovie && 'Loading...'}
      {!loadingMovie && movie && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}{movie.title}{bull}
            </Typography>
            <br />
            <CardMedia
              className={classes.media}
              image={`images/films/${movie.title}.jpg`}
              title={movie.title}
            />
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Episode #
            </Typography>
            <Typography variant="body1" component="p">
              {movie.episode_id}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Director
            </Typography>
            <Typography variant="body1" component="p">
              {movie.director}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Producer
            </Typography>
            <Typography variant="body1" component="p">
              {movie.producer}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Release Date
            </Typography>
            <Typography variant="body1" component="p">
              {movie.release_date}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Opening Crawl
            </Typography>
            <Typography variant="body1" component="p">
              {movie.opening_crawl}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default Movie;
