import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,


}
const verticalCenter = {
    display: 'flex',

    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, color: "gray", fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos voluptate dolores iusto recusandae vel temporibus aspernatur voluptatum voluptatem eum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7CD', color: 'black' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;