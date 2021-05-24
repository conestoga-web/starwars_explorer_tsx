import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

export default function ButtonAppBar({title}) {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link href="/starwars_explorer_tsx/#/" underline="none">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/starwars_explorer_tsx/#/people" underline="none">People</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/starwars_explorer_tsx/#/movies" underline="none">Movies</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/starwars_explorer_tsx/#/planets" underline="none">Planets</Link></MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
           {title}
          </Typography>
          <Button href="/starwars_explorer_tsx/#/"><Avatar alt="Star Wars Logo" src="images/starwars_logo.jpg" className={classes.large} /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
