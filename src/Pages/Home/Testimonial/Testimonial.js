import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PeopleOne from '../../../images/people-1.png'
import PeopleTow from '../../../images/people-2.png'
import PeopleThree from '../../../images/people-3.png'
import ReviewItem from '../ReviewItem/ReviewItem';

const review = [
    {
        id: 1,
        name: 'Winson Herry',
        address: 'california',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content.',
        image: PeopleOne
    },
    {
        id: 2,
        name: 'Winson Herry',
        address: 'california',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content.',
        image: PeopleTow
    },
    {
        id: 3,
        name: 'Winson Herry',
        address: 'california',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content.',
        image: PeopleThree
    }
]

const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Container>
                <Box sx={{ my: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 500, color: 'primary.main', my: 3, textAlign: 'left' }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: 500 }}>
                        What's Our Patients <br />
                        Says
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {review.map((review, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <ReviewItem review={review} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default Testimonial;