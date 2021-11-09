import React from 'react';
import { Grid, Box } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';


const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date())
    return (
        <Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={7} sx={{}}>
                    <Appointments date={date} />
                </Grid>
            </Grid>

        </Box>

    );
};

export default DashboardHome;