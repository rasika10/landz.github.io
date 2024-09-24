import { Grid, Button, Box, TextField,Pagination , IconButton, Typography, Breadcrumbs, ToggleButton, ToggleButtonGroup, Link, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React from 'react';
import wish from '../images/wishlist.svg'
import share from '../images/share.svg'
import landImg from '../images/land.png'
import loc from '../images/location.png'
import trendIcon from '../images/treding.svg'
import label from '../images/label.png'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { useNavigate } from 'react-router-dom';

const cardsData = Array.from({ length: 50 }, (_, index) => ({
 
}));

const LandCard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const cardsPerPage = 4;
  const navigate = useNavigate(); 

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (id) => {
    navigate('/land-profile'); 
  };
  return (
    <>
     {currentCards.map((card, index) => (
      
      <Grid
        style={{
          padding: '1px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, rgba(75,199,191,1) 0%, rgba(254,197,98,1) 100%)',
          marginTop: "16px",
          cursor:"pointer"
        }}
        onClick={() => handleCardClick()}
      >
        <Grid
          container
          className="landCard"
          style={{
            backgroundColor: 'white ',
            padding: '10px',
            borderRadius: '8px',
          }}

        >
          <Grid item xs={3} sx={{ position: "relative", display: "inline-block" }}>
            <img src={landImg} alt="land" width={"240px"} />
<Grid sx={{position:"absolute", top:"7px"}}>
 <Grid class="labelShape">
              <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                Verified
              </Typography>
             </Grid> 
             <Grid sx={{position:"absolute", top:"16px", left:"80px"}}>
    
             <Typography sx={{ borderRadius: "100px", backgroundColor: "#FBBC05", display: "flex", width: "35px",height:"14px", aligSelf: "start", padding: "6px 8px", fontWeight: 600 }}>
                                    <StarBorderRoundedIcon sx={{fontSize:"16px"}} /> <Typography sx={{fontSize:"12px"}}>4.0</Typography>
                                </Typography>
  </Grid>

</Grid>
           
            <Grid> 
          </Grid>
          </Grid>

          <Grid item xs={9} sx={{ pl: 4 }}>
            <Grid container>
              <Grid item xs={8} sx={{ display: "flex" }}>
                <Grid>
                  <img src={loc} alt="loc" width={"18px"} style={{ padding: "4px", paddingLeft: "0" }} />
                </Grid>
                <Typography className='locationTxt' sx={{ p: 0.5 }}> Srisailam Highway, Hyderabad</Typography>

              </Grid>
              <Grid item xs={4} sx={{ textAlign: "end", display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <IconButton aria-label="delete" className='wishBtn' >  <img src={wish} alt="wish" /></IconButton>
                <IconButton aria-label="delete" className='shareBtn' ><img src={share} alt="share" /></IconButton>
                <Button className='smallPrimaryBtn' >Contact</Button>
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", mb: 2, mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#065E14", paddingRight: "5px" }}>5.25 Cr </Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: 500, paddingTop: "2px" }}> | 1377/Sqft</Typography>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Typography className='attributes'>
                  AREA
                </Typography>
                <Typography className='attrValue'>1503 Sqft</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className='attributes'>
                  ROAD DISTANCE
                </Typography>
                <Typography className='attrValue'>1Km</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className='attributes'>
                  SOIL TYPE
                </Typography>
                <Typography className='attrValue'>Black Soil</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className='attributes'>
                  AVAILABILITY
                </Typography>
                <Typography className='attrValue'>Immediate</Typography>
              </Grid>
            </Grid>

            <Grid sx={{ mt: 2, display: "flex" }}>
              <img src={trendIcon} alt='trendIcon' />
              <Typography sx={{
                color: "#3F8608", fontFamily: "Inter", fontSize: "10px", pl: 0.5,
                fontStyle: "normal",
                fontWeight: 500
              }}>Getting high demand than other properties in the same location</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
 ))}
      <Pagination
        count={Math.ceil(cardsData.length / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="text"
        
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </>


  );
};

export default LandCard;
