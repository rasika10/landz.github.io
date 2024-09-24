import {Grid, Button, Box,TextField, Typography, Breadcrumbs,ToggleButton, ToggleButtonGroup, Link, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React from 'react';
import wish from '../images/wishlist.svg'
import share from '../images/share.svg'
import landImg from '../images/land.png'
import loc from '../images/location.png'
import SearchBar from '../components/SearchBar'
import LandCard from '../components/LandCard';
import LandProps from '../components/LandProps';
import MapVew from '../components/MapVew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ViewLand from '../components/ViewLand';
import SimilarLands from '../components/SimilarLands';
import Reviews from '../components/Reviews';
import FeedbackBtn from '../components/FeedbackBtn';
import Footer from '../components/Footer';

const LandProfile = () => {

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
        <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={"handleClick"}
        sx={{fontSize:"12px", fontWeight:"600"}}
      >
        Farmlands
      </Link>,
    <Typography key="3" sx={{ color: '#065E14',fontSize:"12px", fontWeight:"600" }}>
      Land Name
    </Typography>,
  ];
  return (
<>   
<Grid className='breadcrumsHeader'>
<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>    
</Grid>

<ViewLand/>
       <SimilarLands/>
       <Reviews/>
       <FeedbackBtn/>
       <Footer/>

</>
  );
};
  
export default LandProfile;
