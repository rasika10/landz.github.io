import {Grid, Button, Box, Typography, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';
import bgImg from '../images/banner.jpg'

const FarmlandsSlider = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" 
        onClick={"handleClick"}
        sx={{fontSize:"12px", fontWeight:"600"}}
        >
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={"handleClick"}
          sx={{fontSize:"12px", fontWeight:"600"}}
        >
          Property Listings
        </Link>,
        <Typography key="3" sx={{ color: '#065E14',fontSize:"12px", fontWeight:"600" }}>
          Farmlands
        </Typography>,
      ];
  return (
    <Grid container className='bgImageContainer' style={{position:"relative"}}>
    {/* Background Image */}
    <Grid item xs={12} className='bgImage'>
      <img src={bgImg} alt='bgimg' style={{ width: '100%', height: 'auto' }} />
    </Grid>

    {/* Slider Content */}
    <Grid item xs={12} className='sliderContent'>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <Typography variant='h1' className='sliderHeader'>
        Find Your Dream Farmland
      </Typography>
      <Typography className='sliderSubHeader'>
        Discover the ideal farmland for your agricultural needs with our comprehensive listings and advanced search filters.
      </Typography>
    </Grid>
  </Grid>
  
  );
};
  
export default FarmlandsSlider;
