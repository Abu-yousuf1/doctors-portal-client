import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from './../../../hooks/useAuth';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 8
};

const BookingModal = ({ handleClose, open, booking, date, setBookingSuccess }) => {
    const { user } = useAuth();
    const { name, time, price } = booking
    const initialInfo = { patientName: user.displayName, email: user.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        fetch('https://safe-sands-72906.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    console.log(data);
                    handleClose()
                }
            })
        e.preventDefault()
    }

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo)
    }
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>

                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="patientName"
                        defaultValue={user.displayName}
                        onBlur={handleBlur}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="email"
                        defaultValue={user.email}
                        onBlur={handleBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        name="phone"
                        placeholder="Phone Number"
                        onBlur={handleBlur}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 2 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;