import { Grid, Button, Box, TextField, Typography, Breadcrumbs, ToggleButton, ToggleButtonGroup, Link, FormControl, OutlinedInput, InputAdornment, Grid2 } from '@mui/material';
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

const LandProps = () => {

    return (
        <>
            <Grid sx={{ pl: "56px", }}>
                <Grid sx={{ backgroundColor: "#065E14", p: 4, borderRadius: "12px" }}>
                    <Typography sx={{ color: "white", fontSize: "20px", fontWeight: 600, fontFamily: "Inter" }}>    Ready to Sell or Lease Your Land?
                    </Typography>
                    <Typography className='para' sx={{ color: "#fff", pt: 2 }}> List your property for sale or lease effortlessly and connect with potential buyers or lessees worldwide using our user-friendly posting tools.</Typography>

                    <Grid sx={{ textAlign: "center", p: 2, pb: 0 }}><Button sx={{ backgroundColor: "#fff", color: "#065E14", textTransform: "capitalize", fontWeight: 600, pl: 2, pr: 2 }}>Post Land Details</Button>
                    </Grid>
                </Grid>

                <Grid sx={{borderTop:"3px solid #065E14", display:"flex", flexDirection:"column", gap:"24px", background: "linear-gradient(98deg, rgba(232,240,229,1) 0%, rgba(226,241,213,0.5298494397759104) 100%)", p: 4, marginTop: "40px", borderRadius: "12px" }}>
                    <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: 600, fontFamily: "Inter" }}>Why Choose Our App for Buying or Selling Land?
                    </Typography>
                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>

                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>

                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>

                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>

                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>

                    <Grid>
                    <Typography className='paraTitle'>
                        Extensive Listings
                    </Typography>
                    <Typography className='para' sx={{ color: "#000", pt: 1 }}>
                        Access a wide range of properties, including residential, commercial, and agricultural lands, tailored to your needs.
                    </Typography>
                    </Grid>
                  
                </Grid>

            </Grid>
        </>


    );
};

export default LandProps;
