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
import map from '../images/map.png'

const MapVew = () => {

  return (
<>   
<Grid>
    <img src={map} alt='map' width="100%" />
</Grid>
</>

                           
  );
};
  
export default MapVew;
