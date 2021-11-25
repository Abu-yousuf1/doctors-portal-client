import { Card, CardActionArea, Grid, CardMedia, CardContent, Typography, Container, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    console.log(doctors);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container>
            <h2>doctors</h2>
            {!doctors[0] && <CircularProgress style={{ justifyContent: 'center' }} />}
            <Grid container spacing={2}>

                {
                    doctors.map(doctor =>
                        <Grid item xs={12} sm={6} md={4} key={doctor._id}>
                            {doctor.image && <Card sx={{}} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`data:image/jpeg;base64,${doctor.image}`}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doctor.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {doctor.email}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            }

                        </Grid>
                    )
                }


            </Grid>
        </Container>
    );
};

export default Doctors;