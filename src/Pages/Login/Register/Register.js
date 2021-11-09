import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation/Navigation';
import { Typography, TextField, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';




const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registration, isLoading, user, error } = useAuth()
    const history = useHistory()
    const handleLogin = e => {
        if (loginData.password !== loginData.passwordTow) {
            alert('Your password did not match!')
            return
        }
        registration(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
        console.log(loginData);
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };


    return (
        <Box>
            <Navigation />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h6">
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name="name"
                            onChange={handleOnChange}
                            label="Please Write Your Name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Please Write Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Please Write Your Password"
                            type='password'
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name="passwordTow"
                            onChange={handleOnChange}
                            label="Please Re-type Your Password"
                            type='password'
                            variant="standard" />


                        <Button variant="contained" sx={{ width: '50%', m: 4 }} type='submit'>Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/login'><Button variant="text">Already register? Please Login</Button></NavLink>
                    </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email ? <Alert severity="success">Congratulation! Your are successfully register.</Alert> : ''
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Box >
    );
};

export default Register;