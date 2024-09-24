import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Button, TextField, IconButton, Typography, Breadcrumbs, ToggleButton, ToggleButtonGroup, Link, FormControl, OutlinedInput, InputAdornment, List, ListItem } from '@mui/material';
import wish from '../images/wishlist.svg'
import share from '../images/share.svg'
import landImg from '../images/land.png'
import loc from '../images/location.png'
import locRed from '../images/locred.png'
import trendIcon from '../images/treding.svg'
import label from '../images/label.png'
import soil from '../images/soil.png';
import waterIcon from '../images/water.png';
import roadIcon from '../images/road.png';
import plotIcon from '../images/plot.png';
import availibityIcon from '../images/availibity.png';
import transactionIcon from '../images/transaction.png';
import cropIcon from '../images/crop.png';
import officeIcon from '../images/office.png';
import mapIcon from '../images/mapicon.png';
import profile from '../images/profile.png';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import BasicDetailsTab from './BasicDetailsTab';
import DocumentsTab from './DocumentsTab';


const ViewLand = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [activeTab, setActiveTab] = React.useState(0);

    const tabs = [
        { label: 'Basic Details', content: <BasicDetailsTab /> },
        { label: 'Documents', content: <DocumentsTab /> },
        { label: 'Pricing & Other', content: "" },
        { label: 'Property Transactions', content: "" },
        { label: 'Market Rate', content: "" },
    ];


    return (
        <>
            <Grid container sx={{
                padding: '20px 80px',
            }}>
                <Grid item xs={10} sx={{ boxShadow: "0px 1px 8px 0px rgba(17, 17, 17, 0.16)", borderRadius: "12px", padding: "24px !important" }}>
                    <Grid
                        container
                        style={{
                            backgroundColor: 'white ',
                            borderRadius: '8px',
                        }}

                    >
                        <Grid item xs={4} sx={{ display: "inline-block" }}>
                            <Grid sx={{ position: "relative", width: "372px" }}>
                                <img src={landImg} alt="land" width={"372px"} style={{ borderRadius: "12px", }} />
                                <Grid sx={{ position: "absolute", top: "7px", left: "8px", backgroundColor: "#fff", borderRadius: "6px" }}>
                                    <IconButton aria-label="wish" className='wishBtn' >  <img src={wish} alt="wish" /></IconButton>

                                </Grid>
                                <Grid sx={{ position: "absolute", top: "7px", right: "8px", backgroundColor: "#fff", borderRadius: "6px" }}>
                                    <IconButton aria-label="share" className='shareBtn' ><img src={share} alt="share" /></IconButton>
                                </Grid>
                            </Grid>
                            <Grid sx={{ display: "flex", flexDirection: "row", gap: "16px", paddingTop: "10px" }}>
                                <img src={landImg} alt="land" width={"113px"} style={{ borderRadius: "12px" }} />
                                <img src={landImg} alt="land" width={"113px"} style={{ borderRadius: "12px" }} />
                                <img src={landImg} alt="land" width={"113px"} style={{ borderRadius: "12px" }} />

                            </Grid>


                            <Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={8} sx={{ pl: 4 }}>
                            <Grid container>
                                <Grid item xs={9} sx={{ display: "flex" }}>
                                    <Grid sx={{ width: "100%" }}>
                                        <Typography variant='span'>
                                            Agriculture Land for sale
                                        </Typography>

                                    </Grid>
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: "end" }}>
                                    <Grid sx={{ display: "flex", gap: "16px" }}>

                                        <Typography sx={{ borderRadius: "100px", backgroundColor: "#FBBC05", display: "flex", width: "58px", aligSelf: "start", padding: "6px 8px", fontWeight: 600 }}>
                                            <StarBorderRoundedIcon /> 4.2
                                        </Typography>
                                        <Typography sx={{ borderRadius: "100px", backgroundColor: "#34A853", display: "flex", width: "58px", aligSelf: "start", padding: "6px 12px", color: "#fff" }}>
                                            Verified
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid sx={{ display: "flex" }}>
                                <img src={locRed} alt="loc" width={"18px"} style={{ padding: "4px", paddingLeft: "0" }} />
                                <Typography className='locationTxt' sx={{ p: 0.5 }}> Plot 10, Mitra Space, Srisailam Highway, Hyderabad, Telangana</Typography>
                            </Grid>

                            <Grid sx={{ pb: 2 }}>
                                <Link sx={{ color: "#2F68F9", fontSize: "12px" }}> View on map</Link>
                            </Grid>
                            <Grid sx={{ width: "100%", pb: 2 }}>
                                <Typography variant='span'>
                                    3 Acres
                                </Typography>

                            </Grid>


                            <Grid sx={{ display: "flex", pb: 2 }}>
                                <Typography sx={{ fontWeight: 600, fontSize: "32px", color: "#212121", paddingRight: "5px" }}>&#x20B9; 10.25 Cr </Typography>
                                <Typography sx={{ fontSize: "12px", fontWeight: 500, paddingTop: "2px", alignSelf: "center", paddingLeft: "5px" }}>   |  1377/Sqft</Typography>
                            </Grid>

                            <Grid container>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={soil} alt='soildIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            SOIL TYPE
                                        </Typography>
                                        <Typography className='attrValue'>Red Soil</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={waterIcon} alt='waterIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            WATER
                                        </Typography>
                                        <Typography className='attrValue'>Adequate</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={roadIcon} alt='roadIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            ROAD DISTANCE
                                        </Typography>
                                        <Typography className='attrValue'>1 Km</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={plotIcon} alt='plotIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1.5 }}>
                                        <Typography className='attributes'>
                                            LAND ACCESS
                                        </Typography>
                                        <Typography className='attrValue'>_ _ _</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={availibityIcon} alt='availibityIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            AVAILABILITY
                                        </Typography>
                                        <Typography className='attrValue'>Immediate</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={transactionIcon} alt='transactionIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            LAST TRANSACTION
                                        </Typography>
                                        <Typography className='attrValue'>_ _ _</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={cropIcon} alt='cropIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            CROPS
                                        </Typography>
                                        <Typography className='attrValue'>Wheat, Paddy</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={officeIcon} alt='officeIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            MRO OFFICE
                                        </Typography>
                                        <Typography className='attrValue'>_ _ _</Typography>
                                    </Grid>

                                </Grid>
                                <Grid item xs={4} sx={{ display: "flex", pb: 1.5 }}>
                                    <Grid>
                                        <img src={mapIcon} alt='soildIcon' />
                                    </Grid>
                                    <Grid sx={{ pl: 1 }}>
                                        <Typography className='attributes'>
                                            PROPERTY ZONE
                                        </Typography>
                                        <Typography className='attrValue'>Agriculture</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={2} sx={{ paddingLeft: "24px" }}>
                    <Grid sx={{ backgroundColor: "#F0FDF2", padding: "16px", borderRadius: "12px" }}>
                        <Grid container>
                            <Grid item xs={7}>
                                <img src={profile} alt='profile' />

                            </Grid>
                            <Grid item xs={5} sx={{ float: "right" }}>
                                <Typography sx={{ borderRadius: "100px", backgroundColor: "#FBBC05", display: "flex", width: "58px", aligSelf: "start", padding: "6px 8px", fontWeight: 600 }}>
                                    <StarBorderRoundedIcon /> 4.0
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: "#A0A0A0", fontSize: "12px", fontFamily: "Inter" }}>
                                    Posted by
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pb: 2 }}>
                                <Typography sx={{ color: "#333", fontSize: "13px", fontFamily: "Inter" }}>
                                    Owner (1 week ago)
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pb: 2 }}>
                                <Button className='primaryBtn' sx={{ fontSize: "12px !important", width: "100% !important", lineHeight: "16px !important" }}>Contact Owner</Button>

                            </Grid>
                            <Grid item xs={12} sx={{ pb: 2 }}>
                                <Button variant='outlined' className='secondaryBtn' sx={{ fontSize: "12px", width: "100% !important" }}>Schedule Visit</Button>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "16px", height: "136px", backgroundColor: "#FFF6E9", padding: "16px", borderRadius: "12px", border: "1px solid #FBBC05" }}>
                        <Grid sx={{ display: "flex", gap: "5px" }}>
                            <img src={trendIcon} alt='trendIcon' />
                            <Typography sx={{ color: "#3F8608", fontSize: "10px", display: "flex", xs: { flexDirection: "column" } }}> +2.3% high demand     <Typography sx={{ color: "#616161", fontSize: "10px", paddingLeft: "5px" }}> (In last 10 days)</Typography>
                            </Typography>

                        </Grid>

                        <Grid sx={{ display: "flex", padding: "10px 0 0 3px" }}>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: "5px !important", alignSelf: "center", paddingRight: "5px" }} />

                            <Typography sx={{ fontSize: "10px", }}>
                                30 people are viewing this property
                            </Typography>


                        </Grid>
                        <Grid sx={{ display: "flex", padding: "10px 0 0 3px" }}>
                            <FiberManualRecordRoundedIcon sx={{ fontSize: "5px !important", alignSelf: "center", paddingRight: "5px" }} />

                            <Typography sx={{ fontSize: "10px", }}>
                                5 inquiries have been made about this property in the last 24 hours
                            </Typography>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ borderRadius: "12px", padding: "8px 80px" }}>
                <Grid xs={12} sx={{ borderRadius: "12px", boxShadow: "0px 1px 8px 0px rgba(17, 17, 17, 0.16)", padding: "40px" }}>
                    <Typography variant='h5'>
                        More Details
                    </Typography>
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
                    <div style={{ padding: '20px' }}>
                        {tabs[activeTab].content}
                    </div>
                </Grid>

            </Grid>

        </>


    );
};

export default ViewLand;            
