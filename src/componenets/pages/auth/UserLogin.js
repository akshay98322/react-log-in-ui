import { TextField, Button, Box, Alert } from "@mui/material";

import React from 'react'
import { NavLink } from "react-router-dom";

function UserLogin() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        };
        if (actualData.email && actualData.password) {
        console.log(actualData);
        document.getElementById('login-form').reset();
        } else {
            console.log('Please fill all the fields');
        }

    }
  return (
    <>
    <Box component='form' noValidate id='login-form' onSubmit={handleSubmit}>
        <TextField required fullWidth margin='normal' id='email' name='email' label='Email' type='email' />
        <TextField required fullWidth margin='normal' id='password' name='password' label='Password' type='password'/>
        <Box textAlign='center'><Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px:5}}>Login</Button></Box>
        <NavLink to='/'>Forgot Password ?</NavLink>
    </Box>
    </>
  )
}

export default UserLogin