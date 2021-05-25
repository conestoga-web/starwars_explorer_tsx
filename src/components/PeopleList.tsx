import React from 'react';
//import { Link } from 'react-router-dom';
import { IPeople } from '../modules/types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
//import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    /* width: '100%',
    maxWidth: 500, */
    /* minWidth: 275, */
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
    marginTop: '20px',
    marginBottom: '200px',
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
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

/* const PeopleItem = ({ people, id }) => {
    const { name } = people;
    if (id >= 17) id +=1;
    return (
        <h2><Link to={`/person/${id}/`}>{name}</Link></h2>
    );
}; */

function PeopleList({ peopleList, loadingPeopleList}) {
  const classes = useStyles();

  return (
    <section>
      <br />
      {loadingPeopleList && 'Loading...'}
      {!loadingPeopleList && peopleList && (
        <List className={classes.root} subheader={<li />}>
        {peopleList.map((people: IPeople, sectionId: number) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>
                {/* <MovieItem movie = {movie} id = {sectionId + 1}/> */}
                <ListItemLink href={`/starwars_explorer_tsx/#/person/${people.id = (sectionId >= 17) ? sectionId + 2 : sectionId + 1}`}>
                  <Avatar alt={people.name} src={`images/characters/${people.name.replace(/ /g,"_").toLowerCase()}.jpg`} />&nbsp;<ListItemText primary={people.name} />
                </ListItemLink>
              </ListSubheader>  
            </ul>
          </li>
          ))}
        </List>
      )}
    </section>
  );/*  */
};

export default PeopleList;
