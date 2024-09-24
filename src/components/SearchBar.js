import {Grid, Button, Box,TextField, Typography, Breadcrumbs,ToggleButton, ToggleButtonGroup, Link, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React from 'react';
import loc from '../images/location.png'

const SearchBar = ({ handleToggleMap, handleToggleList }) => {
    const [view, setView] = React.useState('left');
    const [searchKey, setSearchKey] =React.useState('');
  console.log(searchKey);
    const handleAlignment = (event, newView) => {
      if (newView !== null) {
        setView(newView);
      }
    };
  return (
<>
<Grid container spacing={2} sx={{pb:"16px"}}>
<Grid 
  item 
  xs={12} 
  md={12} 
  lg={12} 
  sx={{ 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    gap: 2 
  }}
>
  <TextField
    variant="outlined"
    placeholder="Search"
    InputProps={{
      startAdornment: <SearchOutlinedIcon sx={{ pt: 0.5, pr: 1 }} />,
      style: { height: '51px', paddingTop: "5px" }, 
    }}
    sx={{ width: '100%', paddingTop: '0', flex: 1, height: '51px' }} 
    value={searchKey}
    onChange={(e) => setSearchKey(e.target.value)}
  />
  
  <Button className="primaryBtn" sx={{ height: '45px', ml: 2 }}>
    Search
  </Button> 
  
  <Button
    className="filterBtn"
    variant="outlined"
    startIcon={<FilterListIcon />}
    sx={{ height: '45px', ml: 2, padding: "12px 24px", whiteSpace: 'nowrap' }} 
  >
    More filters
  </Button>

  <ToggleButtonGroup
    value={view}
    exclusive
    onChange={handleAlignment}
    aria-label="view set"
    sx={{ ml: 2 }}
  >
    <ToggleButton
      value="left"
      aria-label="left aligned"
      sx={{
        borderRadius: '8px',
        height: '45px', 
        '&.Mui-selected': {
          backgroundColor: '#065E14', 
          color: 'white', 
          '&:hover': {
            backgroundColor: '#065E14', 
          },
        },
      }}
      onClick={handleToggleList}
    >
      <ViewHeadlineIcon />
    </ToggleButton>

    <ToggleButton
      value="right"
      aria-label="right aligned"
      sx={{
        borderRadius: '8px',
        height: '45px', // Set height for consistent alignment
        '&.Mui-selected': {
          backgroundColor: '#065E14', 
          color: 'white',
          '&:hover': {
            backgroundColor: '#065E14',
          },
        },
      }}
      onClick={handleToggleMap}

    >
      <img src={loc} alt="view" />
    </ToggleButton >
  </ToggleButtonGroup>
</Grid>






      </Grid>
</>

                           
  );
};
  
export default SearchBar;
