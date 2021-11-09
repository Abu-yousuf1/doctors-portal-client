import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: "rgba(45,58,74,0.9)",
    backgroundBlendMode: 'darken,luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box sx={{ p: 4 }}>
                        <Typography variant="h6" sx={{ mb: 4 }} style={{ color: '#5CE7CD' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h4" sx={{ my: 4 }} style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos voluptate dolores iusto recusandae vel temporibus aspernatur voluptatum voluptatem eum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7CD', color: 'black' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
