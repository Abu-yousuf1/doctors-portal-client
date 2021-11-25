import React from 'react';
import Navigation from './../../Shared/Navigation/Navigation'
import Services from './../../Home/Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from './../Banner/Banner';
import Treatment from '../Treatment/Treatment';
import Testimonial from './../Testimonial/Testimonial';
import Form from '../Form/Form';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Treatment />
            <AppointmentBanner />
            <Testimonial />
            <Doctors />
            <Form />
        </div>
    );
};

export default Home;