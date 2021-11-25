import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvxXGAQHZ9U1ACZ03EBduq3l5NrlNu3MldkS0BnffUnT4aSwOxIG5JH4REDgpkdizHHUSr3zIXhgLYo3rFdcldh00ZRE5yvkQ')

const Payment = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointment(data))

    }, [id])

    return (
        <div>
            <h3>Please pay for {appointment.patientName} for {appointment.serviceName}</h3>
            <h3>pay ${appointment.price}</h3>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;