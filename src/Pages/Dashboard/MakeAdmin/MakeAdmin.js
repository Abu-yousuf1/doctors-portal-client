import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [successfully, setSuccessfully] = useState(false)
    const { token } = useAuth()
    const handleSubmit = e => {
        const user = { email }

        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccessfully(true)
                }
                console.log(data);
            })

        e.preventDefault()

    }
    const handleOnChange = e => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h1>Make an admin</h1>
            <form onSubmit={handleSubmit}>
                <TextField

                    sx={{ width: '25%', m: 2 }}
                    id="standard-basic"
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    label="Please Write Your Email"
                    variant="standard" />
                <br />
                <Button sx={{ width: '25%', m: 2 }} type="submit" variant="contained" >Make Admin</Button>
            </form>
            {
                successfully && <Alert severity="success">Congratulation! Your are successfully Login.</Alert>
            }
        </div>
    );
};

export default MakeAdmin;