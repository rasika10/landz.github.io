import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid, Rating, LinearProgress, Button, Grid2 } from '@mui/material';

function Footer() {
    return (
        <Grid container sx={{padding:"54px 80px", backgroundColor:"#065E14"}} >

            <Grid item xs={2.4} sx={{pb:1, display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography className='footerMenu'>Property Listings</Typography>
            <Typography className='footerSubMenu'>Residential properties</Typography>
            <Typography className='footerSubMenu'>Commercial properties</Typography>
            <Typography className='footerSubMenu'>Plots</Typography>
            <Typography className='footerSubMenu'>Farmlands</Typography>
            <Typography className='footerSubMenu'>Industrial properties</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{pb:1, display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography className='footerMenu'>Company</Typography>
            <Typography className='footerSubMenu'> Home</Typography>
            <Typography className='footerSubMenu'>About us</Typography>
            <Typography className='footerSubMenu'>Contact</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{pb:1, display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography className='footerMenu'>Resource</Typography>
            <Typography className='footerSubMenu'> Blog</Typography>
            <Typography className='footerSubMenu'>Newsletter</Typography>
            <Typography className='footerSubMenu'>Help centre</Typography>
            <Typography className='footerSubMenu'>Support</Typography>

            </Grid>
            <Grid item xs={2.4} sx={{pb:1, display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography className='footerMenu'>Social</Typography>
            <Typography className='footerSubMenu'> Twitter</Typography>
            <Typography className='footerSubMenu'>LinkedIn</Typography>
            <Typography className='footerSubMenu'>Facebook</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{pb:1, display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography className='footerMenu'>Legal</Typography>
            <Typography className='footerSubMenu'> Terms</Typography>
            <Typography className='footerSubMenu'>Privacy</Typography>
            <Typography className='footerSubMenu'>Cookies</Typography>
            <Typography className='footerSubMenu'>Licenses</Typography>
            </Grid>
<Grid item xs={12} sx={{borderTop:"1px solid #EAECF0", padding:"25px 80px", marginTop:"60px", textAlign:"center"}}>
    <Typography sx={{color:"#fff", fontFamily:"Inter"}}>
    © 2024 LandZ. All rights reserved.
    </Typography>
</Grid>
        </Grid>
    );
}

export default Footer;
