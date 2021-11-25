import React from 'react';

import { Typography, Button, Input, TextField } from '@mui/material';
import { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1>Add doctor</h1>

            <Typography variant="h3"></Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    required
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    defaultValue=""
                    variant="standard"
                />
                <br />
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    type="email"
                    defaultValue=""
                    variant="standard"
                />
                <br />
                <Input accept="image/*" onChange={(e) => setImage(e.target.files[0])} type="file" />
                <br />
                <Button variant="contained" type="submit">
                    Upload
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;