import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'; 

function Navigation() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <div>
        <h1>Welcome, StarWas World!</h1>
        <div>
          <Link to="/people">
            <Button variant="contained">People</Button>
          </Link>
        </div>
        <div>
          <Link to="/movies">
            <Button variant="contained">Movies</Button>
          </Link>  
        </div>
        <div>
          <Link to="/planets">
            <Button variant="contained">Planets</Button>
          </Link>
        </div>
      </div>
    </>  
  );
}

export default Navigation;