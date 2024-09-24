import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid, Rating, LinearProgress, Button } from '@mui/material';
import landImg from '../images/land.png';
import loc from '../images/location.png';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

export default function SimilarLands() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const tabs = [
        { label: 'Agriculture Lands', content: "" },
        { label: 'Residential Lands', content: "" },
        { label: 'Commercial Lands', content: "" },
        { label: 'Industrial Lands', content: "" },
        { label: 'Others', content: "" },
    ];

    const cardData = [
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
    ];

    const cardsPerSlide = 4; 

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, Math.ceil(cardData.length / cardsPerSlide) - 1)
        );
    };

    const displayedCards = cardData.slice(
        currentIndex * cardsPerSlide,
        currentIndex * cardsPerSlide + cardsPerSlide
    );

    return (
        <div>
            <Grid container sx={{ padding: "24px 80px" }}>
                <Grid item xs={12} sx={{ borderRadius: "12px", boxShadow: "0px 1px 8px 0px rgba(17, 17, 17, 0.16)", padding: "40px" }}>
                    <Typography variant='h5'>Discover Similar land listings</Typography>
                    <Typography sx={{ fontSize: "14px", color: " #475467", paddingTop: "10px" }}>Explore premium land listings tailored to your dreams and investments</Typography>
                    <div style={{ display: 'flex', flexDirection: "row", gap: "50px", marginTop: "24px" }}>
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    padding: '5px 0px',
                                    cursor: 'pointer',
                                    borderBottom: activeTab === index ? '2px solid #065E14' : 'none',
                                    color: activeTab === index ? '#065E14' : '#A0A0A0',
                                }}
                            >
                                {tab.label}
                            </div>
                        ))}
                    </div>
                    <Grid sx={{ pt: 4, display: "flex", gap: "24px", justifyContent: "center" }}>
                        {displayedCards.map((card, index) => (
                            <Grid key={index} className='mask' sx={{ width: "268px", border: "1px solid #00000014", boxShadow: "0px 1px 8px 0px #11111129", borderRadius: "12px" }}>
                                <img src={landImg} alt='land' width="100%" />
                                <Grid container sx={{ padding: "16px" }}>
                                    <Grid item xs={10.5} sx={{ paddingBottom: "8px" }}>
                                        <Typography sx={{ fontSize: "12px" }}>
                                            {card.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.5} sx={{ display: "flex", paddingBottom: "8px" }}>
                                        <Typography sx={{ fontSize: "12px" }}>{card.rating}</Typography>
                                        <StarRateRoundedIcon sx={{ fontSize: "16px", color: "#F99F19" }} />
                                    </Grid>
                                    <Grid item xs={12} sx={{ paddingBottom: "8px" }}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                                            &#x20B9; {card.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: "flex", paddingBottom: "12px" }}>
                                        <Grid>
                                            <img src={loc} alt="loc" width={"18px"} style={{ padding: "4px", paddingLeft: "0" }} />
                                        </Grid>
                                        <Typography className='locationTxt' sx={{ p: 0.5 }}>{card.location}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ paddingBottom: "8px" }}>
                                        <Button className='smallPrimaryBtn'>Contact</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid sx={{ justifyContent: "center", display: "flex", gap: "24px", pt: 4 }}>
                        <KeyboardBackspaceRoundedIcon
                            className='arrow'
                            sx={{ cursor: 'pointer', color: currentIndex > 0 ? '#212121' : '#A0A0A0', border: currentIndex > 0 ? "2px solid #212121" : "2px solid #A0A0A0" }}
                            onClick={handlePrev}
                        />
                        <EastRoundedIcon
                            className='arrow'
                            sx={{ cursor: 'pointer', color: currentIndex < Math.ceil(cardData.length / cardsPerSlide) - 1 ? '#000' : '#A0A0A0', border: currentIndex < Math.ceil(cardData.length / cardsPerSlide) - 1 ? "2px solid #212121" : "2px solid #A0A0A0" }}
                            onClick={handleNext}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
