import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <header style={{borderBottom:"1px solid #ddd"}}>
      {/* Left side with typos */}
      <Grid className='appName'>LandZ App</Grid>
      <Grid className='headerMenus'>
         <select style={{ padding: '0.5rem' }}>
          <option value="property-listings">Property Listings</option>
        </select>

        <Typography className='menus' variant='span'>Post Property</Typography>
        <Typography className='menus' variant='span'>Blog</Typography>
        <Typography className='menus' variant='span'>About</Typography>
        <Typography className='menus' variant='span'>Contact</Typography>                      
      </Grid>
      
      {/* Right side with buttons */}
     
      <Grid>
        <button className='secondaryBtn' style={{ marginRight: '1rem' }}>Signup</button>
        <button className='primaryBtn'>Login</button>
      </Grid>
    </header>
  );
};
 
export default Header;
