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
import FarmlandsSlider from '../components/FarmlandsSlider'

const Farmlands = () => {
  const [isToggledList, setIsToggledList] = React.useState(false);
  const [isToggledMap, setIsToggledMap] = React.useState(false);

  // Function to handle toggle button click
  const handleToggleList = () => {
    setIsToggledList(true);
    setIsToggledMap(false);
  };
  const handleToggleMap = () => {
    setIsToggledMap(true);
    setIsToggledList(false);
  };
  return (
<>   
<FarmlandsSlider/>
<br/>
<Grid container spacing={2} sx={{padding:"0 80px 80px 80px"}}>
    <Grid item xs={8}>
                <SearchBar handleToggleList={handleToggleList} handleToggleMap={handleToggleMap} />
               {isToggledMap? <MapVew/> : <LandCard  />}
                
              
    </Grid>

    <Grid item xs={4}>
           <LandProps/>
    </Grid>

</Grid>
</>

                           
  );
};
  
export default Farmlands;
