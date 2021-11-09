import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const ReviewItem = ({ review }) => {
    const { name, image, address, description } = review
    return (
        <Card sx={{ p: 2 }}>
            <CardContent >
                <Typography variant="h5" style={{ textAlign: 'justify', fontWeight: 400, fontSize: 20 }} color='text.secondary'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', mt: 3 }}>
                <img src={image} alt="" />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {address}
                    </Typography>

                </Box>
            </CardActions>
        </Card>
    );
};

export default ReviewItem;