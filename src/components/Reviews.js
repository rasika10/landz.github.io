import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid, Rating, LinearProgress, Button } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const testimonials = [
    {
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "Jane Doe",
        title: "CEO, Example Company",
        image: "https://codingyaar.com/wp-content/uploads/square-headshot-1.png"
    },
    {
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "June Doe",
        title: "CEO, Example Company",
        image: "https://codingyaar.com/wp-content/uploads/square-headshot-2.png"
    },
    {
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        name: "John Doe",
        title: "CEO, Example Company",
        image: "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
    }
];

export default function Reviews() {
    return (
        <Box>
            <Grid container sx={{ padding: "16px 80px" }}>
                <Grid sx={{ borderRadius: "12px", width: "100%", boxShadow: "0px 1px 8px 0px rgba(17, 17, 17, 0.16)", padding: "40px" }}>
                    <Grid>
                    <Typography variant='h5'>
                        What people say about this land
                    </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} lg={7} sx={{paddingTop:"70px"}}>
                    
                            <Grid container sx={{height:"350px"}}>
                                <Grid item xs={4} sx={{ justifyContent: "center", my: 3, display: "flex", height: "90px", mt: "10%" }}>
                                    <Typography sx={{ fontSize: "96px", color: "#F99F19", fontWeight: 600, fontFamily: "Inter", lineHeight: "100px" }}>4.0</Typography> <Typography sx={{ fontSize: "24px", color: "#A0A0A0", alignSelf: "end" }}> out of 5</Typography>
                                </Grid>
                                <Grid item xs={8} sx={{ justifyContent: "center", my: 3, display: "flex", height: "90px", pt: "25px" }}>
                                    <Box sx={{ width: '470px', textAlign: 'center', my: 3 }}>
                                        <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            {[50, 25, 35, 10, 0].map((value, index) => (
                                                <Grid key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={value}
                                                        sx={{
                                                            height: 10,
                                                            width: '100%',
                                                            borderRadius: 5,
                                                            backgroundColor: '#e0e0e0',
                                                            '& .MuiLinearProgress-bar': {
                                                                borderRadius: 5,
                                                                backgroundColor: '#F99F19',
                                                            },
                                                        }}
                                                    />
                                                    <Typography variant="body1" sx={{ ml: 1, display: "flex" }}>
                                                        {value / 10} <StarRateRoundedIcon fontSize="small" />
                                                    </Typography>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>   <Grid item xs={12} sx={{textAlign:"center"}}>
                                   <Button className='primaryBtn' sx={{ width:"240px !important"}}>Write Review</Button>
                                </Grid>
                        </Grid>

                        <Grid item xs={12} lg={5} sx={{ height: "550px", overflowY: "auto", overflowX:"hidden", padding: "25px 85px" }}>{testimonials.map((testimonial, index) => (
                            <Card key={index} sx={{ boxShadow: 3, borderRadius: 2, width: "352px", mb: 2.5 }}>
                                <CardContent>
                                    <Box sx={{ fontSize: '2rem', color: 'text.secondary', mb: 2 }}>
                                        <i className="bi bi-quote" />
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        "{testimonial.text}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: "48px", height: "48px", mr: 2 }}
                                        />
                                        <Box>
                                            <Typography fontWeight="bold" sx={{ fontSize: "16px", color: "#065E14" }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {testimonial.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
