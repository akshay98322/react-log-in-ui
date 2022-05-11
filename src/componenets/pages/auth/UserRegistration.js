import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from "@mui/material"
import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function UserRegistration() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
            tc: data.get('tc')
        };
        if (actualData.name && actualData.email && actualData.password && actualData.confirm_password && actualData.tc !== null) {
            if (actualData.password === actualData.confirm_password) {
                setError({status: true, msg: "Registration Success", type: "success"});
                document.getElementById('registration-form').reset();
            } else {
                setError({status: true, msg: "Password and Confirm Password doesn't match", type: "error"});
            }
        } else {
            setError({status: true, msg: "Please fill all the fields", type: "error"});
        }

    }
  return (
    <>
    <Box component='form' noValidate id='registration-form' onSubmit={handleSubmit}>
        <TextField required fullWidth margin='normal' id='name' name='name' label='Name' />
        <TextField required fullWidth margin='normal' id='email' name='email' label='Email' />
        <TextField required fullWidth margin='normal' id='password' name='password' label='Password' type='password'/>
        <TextField required fullWidth margin='normal' id='confirm_password' name='confirm_password' label='Confirm Password' type='password'/>
        <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc' />} label="I agree to Terms and Conditions" />        
        <Box textAlign='center'><Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px:5}}>Login</Button></Box>        
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert>: null}
    </Box>
    </>
  )
}

export default UserRegistration