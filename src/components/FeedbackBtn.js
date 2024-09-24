import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function FeedbackBtn() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/feedback'); 
      };
    return (
        <Grid className='bgImg' sx={{ marginTop: "16px" }}>
            <Typography variant='h4' sx={{ pb: 2, fontWeight: 800, color: "#065E14" }}> Visited this property?</Typography>
            <Typography sx={{ pb: 2 }}>We'd love to hear about your experience. Please take a moment to share your thoughts.</Typography>
            <Button className='primaryBtn' sx={{ width: "290px !important" }} onClick={handleClick}>Submit Feedback</Button>
        </Grid>
    );
}

export default FeedbackBtn;
