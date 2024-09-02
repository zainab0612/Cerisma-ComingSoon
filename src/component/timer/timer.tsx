"use client"
import { useState, useEffect } from 'react';
import { Box } from '@mui/joy';
import { Typography, Grid } from '@mui/material';

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);



    return (
        <>
            <Box sx={{
                margin: "30px",
                color: "white",
                display: "flex",
            }}>
                <Box sx={{

                }}>
                    <Grid container xs={12} md={12} lg={12} xl={12} sx={{
                        display: 'flex',
                        flexWrap: 'nowrap'
                    }}>
                        <Grid item xs={3} md={3} lg={3}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                padding: "5px",
                                fontSize: '1rem'
                            }}>
                                <Typography variant="h6" >
                                    {timeLeft.days}
                                </Typography>
                                <Typography variant="body2">
                                    Days
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{
                                padding: "6px",
                                fontSize: "30px"
                            }}>:</Typography>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                padding: "5px",
                                fontSize: '1rem'
                            }}>
                                <Typography variant="h6" >
                                    {timeLeft.hours}
                                </Typography>
                                <Typography variant="body2" >
                                    Hours
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{
                                padding: "6px",
                                fontSize: "30px"
                            }}>:</Typography>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                padding: "5px",
                                fontSize: '1rem'

                            }}>
                                <Typography variant="h6" >
                                    {timeLeft.minutes}
                                </Typography>
                                <Typography variant="body2" >
                                    Minutes
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{
                                padding: '6px',
                                fontSize: "30px"
                            }}>:</Typography>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                padding: "5px",
                                fontSize: '1rem'
                            }}>
                                <Typography variant="h6" >
                                    {timeLeft.seconds}
                                </Typography>
                                <Typography variant="body2" >
                                    Seconds
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box >

        </>
    )
}
export default CountdownTimer;
