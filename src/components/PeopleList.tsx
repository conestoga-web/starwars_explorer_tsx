import React from 'react';
//import { Link } from 'react-router-dom';
import { IPeople } from '../modules/types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 700,
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
                <ListItemLink href={`/starwars_explorer_tsx/#/person/${(sectionId >= 17) ? sectionId + 2 : sectionId + 1}`}>
                  <PersonIcon style={{ marginRight: "0.5em" }} /><ListItemText primary={people.name} />
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
