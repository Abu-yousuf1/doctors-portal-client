import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { name, description, img } = service
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
            <CardMedia
                component="img"
                style={{ width: "auto", height: "80px", margin: "0 auto" }}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{ my: 3 }} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;