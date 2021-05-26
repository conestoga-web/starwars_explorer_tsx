import React from 'react';
//import { Link } from 'react-router-dom';
import { IPlanet } from '../modules/types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
//import StarIcon from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'auto',
    marginTop: '20px',
    marginBottom: '200px',
    paddingRight: '20%',
    paddingLeft: '10%',
    paddingTop: '10%',
    paddingBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 400,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxHeight: 600,
      minWidth: 300,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxHeight: 600,
      minWidth: 500,
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: 600,
      minWidth: 600,
    },
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

/* const PlanetItem = ({ planet, id }) => {
    const { name } = planet;
    return (
        <h2><Link to={`/planet/${id}`}>{name}</Link></h2>
    );
}; */

function PlanetList({ planetList, loadingPlanetList}) {
  const classes = useStyles();

  return (
    <section>
      <br />
      {loadingPlanetList && 'Loading...'}
      {!loadingPlanetList && planetList && (
        <List className={classes.root} subheader={<li />}>
          {planetList.map((planet: IPlanet, sectionId: number) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>
                  {/* <MovieItem movie = {movie} id = {sectionId + 1}/> */}
                  <ListItemLink href={`/starwars_explorer_tsx/#/planet/${planet.id = sectionId + 1}`}>
                    <Avatar alt={planet.name} src={`images/planets/${planet.name}.jpg`} />&nbsp;<ListItemText primary={planet.name} />
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

export default PlanetList;
