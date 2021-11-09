import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'

const formBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: "rgba(45,58,74,0.8)",
    backgroundBlendMode: 'darken,luminosity'
}

const Form = () => {
    return (
        <Box style={formBg} sx={{ marginTop: 5 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, mt: 5 }}>
                CONTACT US
            </Typography>
            <Typography variant="h3">
                Always connect with us
            </Typography>

            <form style={{ marginTop: 60 }}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    label="Size"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    label="Size"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                />
                <TextField
                    sx={{ width: '50%', m: 1, color: 'text.primary' }}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
                <br />
                <Button sx={{}} type="submit" variant="contained" >Submit</Button>
            </form>

        </Box>

    );
};

export default Form;