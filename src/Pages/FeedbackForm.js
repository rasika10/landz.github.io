import React from 'react'
import { Card, CardContent, Typography, Box, Avatar, Grid, Rating, LinearProgress, Button, Link } from '@mui/material';
import feedbackImg from '../images/Feedback.png'

export default function FeedbackForm() {
    const [selectedOption, setSelectedOption] = React.useState('');

    const handleOptionChangeGender = (event) => {
        setSelectedOption(event.target.value);
    };
    const [checkedOptions, setCheckedOptions] = React.useState({
        Excellent: false,
        Good: false,
        Average: false,
        Poor: false,
    });

    const handleOptionChange = (event) => {
        const { name, checked } = event.target;
        setCheckedOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
    };

    return (
        <Grid container sx={{ padding: "24px 80px" }}>
            <Grid item xs={12} sx={{ pb: 3 }}>
                <Typography variant='h5'>Submit Feedback</Typography>
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
                <Grid sx={{display:"flex", justifyContent:"center"}}>
                    <img src={feedbackImg} alt='feedbackimg' />
                </Grid>
            </Grid>
            <Grid item lg={6} md={12} xs={12} sx={{ display: "flex", flexDirection: "column", gap: "30px", height: "70vh", overflowX: "hidden", overflowY: "auto", padding: "0 40px" }}>
                <Grid>
                    <label
                        htmlFor="name"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        style={{
                            width: '100%',
                            padding: '12px 12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="name"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        style={{
                            width: '100%',
                            padding: '12px 12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="mobile"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Mobile Number
                    </label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        placeholder="Mobile Number"
                        style={{
                            width: '100%',
                            padding: '12px 12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="gender"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Gender
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="radio"
                                id="Male"
                                name="Male"
                                value="Male"
                                checked={selectedOption === 'Male'}
                                onChange={handleOptionChangeGender}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Male</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="radio"
                                id="Female"
                                name="Female"
                                value="Female"
                                checked={selectedOption === 'Female'}
                                onChange={handleOptionChangeGender}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>Female</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="radio"
                                id="Others"
                                name="Others"
                                value="Others"
                                checked={selectedOption === 'Others'}
                                onChange={handleOptionChangeGender}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option3" style={{ fontSize: "14px" }}>Others</label>
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        How was your overall experience visiting this land?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Excellent"
                                name="Excellent"
                                value="Excellent"
                                checked={checkedOptions.Excellent}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Excellent</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Good"
                                name="Good"
                                value="Good"
                                checked={checkedOptions.Good}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>Good</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Average"
                                name="Average"
                                value="Average"
                                checked={checkedOptions.Average}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option3" style={{ fontSize: "14px" }}>Average</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Poor"
                                name="Poor"
                                value="Poor"
                                checked={checkedOptions.Poor}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option3" style={{ fontSize: "14px" }}>Poor</label>
                        </div>
                    </Grid>
                </Grid>

                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        How would you rate the soil fertility?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="VeryFertile"
                                name="VeryFertile"
                                value="VeryFertile"
                                checked={checkedOptions.VeryFertile}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Very Fertile</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Fertile"
                                name="Fertile"
                                value="Fertile"
                                checked={checkedOptions.Fertile}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>Fertile</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Moderate"
                                name="Moderate"
                                value="Moderate"
                                checked={checkedOptions.Moderate}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option3" style={{ fontSize: "14px" }}>Average</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Poor1"
                                name="Poor1"
                                value="Poor1"
                                checked={checkedOptions.Poor1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option3" style={{ fontSize: "14px" }}>Poor</label>
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        Is the land well-drained, and are there irrigation facilities available?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="yes"
                                name="yes"
                                value="yes"
                                checked={checkedOptions.yes}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Yes</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="no"
                                name="no"
                                value="no"
                                checked={checkedOptions.no}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>No</label>
                        </div>


                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="landused"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        What has the land been previously used for?
                    </label>
                    <textarea
                        id="landused"
                        name="landused"
                        placeholder="Write something"
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                        rows={3}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        Is there access to water resources?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="yes1"
                                name="yes1"
                                value="yes1"
                                checked={checkedOptions.yes1}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Yes</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="no1"
                                name="no1"
                                value="no1"
                                checked={checkedOptions.no1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>No</label>
                        </div>


                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        How would you describe the quality of water available?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Clean"
                                name="Clean"
                                value="Clean"
                                checked={checkedOptions.Clean}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Clean</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Moderate1"
                                name="Moderate1"
                                value="Moderate1"
                                checked={checkedOptions.Moderate1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>Moderate</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="Contaminated"
                                name="Contaminated"
                                value="Contaminated"
                                checked={checkedOptions.Contaminated}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>Contaminated</label>
                        </div>


                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="landvisit"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        Are there any water rights or restrictions associated with the property?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="yes2"
                                name="yes2"
                                value="yes2"
                                checked={checkedOptions.yes2}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Yes</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="no2"
                                name="no2"
                                value="no2"
                                checked={checkedOptions.no2}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>No</label>
                        </div>


                    </Grid>
                </Grid>

                <Grid>
                    <label
                        htmlFor="distance"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        How far is the land from the nearest market or distribution center?
                    </label>
                    <input
                        type="text"
                        id="distance"
                        name="distance"
                        placeholder="Enter Distance"
                        style={{
                            width: '100%',
                            padding: '12px 12px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="environment"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Are there any environmental concerns?
                    </label>
                    <textarea
                        id="environment"
                        name="environment"
                        placeholder="Write something"
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                        rows={3}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="restrictions"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        Is the title clear, and are there any disputes or restrictions?
                    </label>
                    <textarea
                        id="restrictions"
                        name="restrictions"
                        placeholder="Write something"
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                        rows={3}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="agriculturaluse"
                        style={{ display: 'block', marginBottom: '8px', fontSize: "14px" }}>
                        What types of crops or agricultural uses is the land suitable for?
                    </label>
                    <textarea
                        id="agriculturaluse"
                        name="agriculturaluse"
                        placeholder="Write something"
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                        rows={3}
                    />
                </Grid>
                <Grid>
                    <label
                        htmlFor="potentialROI"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        How would you rate the potential ROI of this property?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="one"
                                name="one"
                                value="one"
                                checked={checkedOptions.one}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>1</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="two"
                                name="two"
                                value="two"
                                checked={checkedOptions.two}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>2</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="three"
                                name="three"
                                value="three"
                                checked={checkedOptions.three}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>3</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="four"
                                name="four"
                                value="four"
                                checked={checkedOptions.four}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>4</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="five"
                                name="five"
                                value="five"
                                checked={checkedOptions.five}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>5</label>
                        </div>


                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="potentialROI"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        Is there potential for future development or expansion?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="yes4"
                                name="yes4"
                                value="yes4"
                                checked={checkedOptions.yes4}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Yes</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="no4"
                                name="no4"
                                value="no4"
                                checked={checkedOptions.no4}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>No</label>
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="potentialROI"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        Would you recommend this land to others?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="yes5"
                                name="yes5"
                                value="yes5"
                                checked={checkedOptions.yes5}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>Yes</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="no5"
                                name="no5"
                                value="no5"
                                checked={checkedOptions.no5}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>No</label>
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <label
                        htmlFor="potentialROI"
                        style={{ display: 'block', marginBottom: '18px', fontSize: "14px" }}>
                        How would you rate the potential ROI of this property?
                    </label>


                    <Grid sx={{ display: "flex", flexDirection: "row", gap: "80px" }}>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="one1"
                                name="one1"
                                value="one1"
                                checked={checkedOptions.one1}
                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option1" style={{ fontSize: "14px" }}>5</label>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="two1"
                                name="two1"
                                value="two1"
                                checked={checkedOptions.two1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>4</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="three1"
                                name="three1"
                                value="three1"
                                checked={checkedOptions.three1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>3</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="four1"
                                name="four1"
                                value="four1"
                                checked={checkedOptions.four1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>2</label>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <input
                                type="checkbox"
                                id="five1"
                                name="five1"
                                value="five1"
                                checked={checkedOptions.five1}

                                onChange={handleOptionChange}
                                style={{ marginRight: '8px' }}
                            />
                            <label htmlFor="option2" style={{ fontSize: "14px" }}>1</label>
                        </div>


                    </Grid>
                </Grid>

                <Grid>
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        value="agree"
                        checked={checkedOptions.agree}

                        onChange={handleOptionChange}
                        style={{ marginRight: '8px' }}
                    />
                    <label htmlFor="option2" style={{ fontSize: "14px" }}>I agree to share my review publicly on the platform.</label>

                </Grid>

                <Grid>
                    <input
                        type="checkbox"
                        id="confirm"
                        name="confirm"
                        value="confirm"
                        checked={checkedOptions.confirm}

                        onChange={handleOptionChange}
                        style={{ marginRight: '8px' }}
                    />
                    <label htmlFor="option2" style={{ fontSize: "14px" }}>I confirm that my review is honest and based on my personal experience.</label>

                </Grid>
                <Grid>
                    <Button className='primaryBtn' >Submit</Button>
                </Grid>
            </Grid>

        </Grid>
    )
}
