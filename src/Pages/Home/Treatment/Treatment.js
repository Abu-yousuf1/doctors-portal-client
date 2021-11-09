import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Treatment = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 5, alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '50%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ justifyContent: 'flex-start', textAlign: 'left', my: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 500 }} >
                        Exceptional Dental<br />
                        Care, on Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 300, mt: 2 }} color='text.secondary'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis animi obcaecati earum libero inventore possimus ipsam! Sint, optio delectus. Voluptate atque minus consectetur aperiam libero modi quia ullam quibusdam minima.
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Treatment;