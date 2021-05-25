import React from 'react';
//import { Link } from 'react-router-dom';
import { IMovie } from '../modules/types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
//import LocalMoviesIcon from '@material-ui/icons/LocalMovies'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      /* width: '100%', */
      /* maxWidth: 500, */
      /* minWidth: 275, */
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 600,
      marginBottom: '200px',
      /* marginRight: '20%',
      marginLeft: '20%', */
      marginTop: '20px',
      paddingRight: '20%',
      paddingLeft: '10%',
      paddingTop: '10%',
      paddingBottom: '10%',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

/* const MovieItem = ({ movie, id }) => {
    const { title } = movie;
    return (
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    );
}; */

function MovieList({ movieList, loadingMovieList}) {
  const classes = useStyles();

  return (
    <section>
      <br />
      {loadingMovieList && 'Loading...'}
      {!loadingMovieList && movieList && (
        <List className={classes.root} subheader={<li />}>
          {movieList.results.map((movie: IMovie, sectionId: number) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>
                  {/* <MovieItem movie = {movie} id = {sectionId + 1}/> */}
                  <ListItemLink href={`/starwars_explorer_tsx/#/movie/${movie.id = sectionId + 1}`}>
                    <Avatar alt={movie.title} src={`images/films/${movie.title}.jpg`} />&nbsp;<ListItemText primary={movie.title} />
                  </ListItemLink>
                </ListSubheader>  
              </ul>
            </li>
        ))}
      </List>
      )}
    </section>
  );
};

export default MovieList;