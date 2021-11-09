import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation/Navigation';
import { Typography, TextField, Alert, CircularProgress } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';




const Login = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();
    const { userSignIn, isLoading, user, error, googleSignIn } = useAuth()
    const handleLogin = e => {
        e.preventDefault()
        userSignIn(loginData.email, loginData.password, location, history)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }


    return (
        <Box>
            <Navigation />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h6">
                        Login
                    </Typography>

                    {!isLoading && <form onSubmit={handleLogin}>
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


                        <Button variant="contained" sx={{ width: '50%', m: 4 }} type='submit'>Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'><Button variant="text">Ary Not register? Please Register</Button></NavLink>
                    </form>}
                    <p>-----------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google sign-in</Button>

                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email ? <Alert severity="success">Congratulation! Your are successfully Login.</Alert> : ''
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

export default Login;