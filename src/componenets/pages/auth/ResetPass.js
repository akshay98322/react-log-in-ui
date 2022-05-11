import {Grid, TextField, Button, Box, Alert } from "@mui/material"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function ResetPass() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            confirm_password: data.get('confirm_password'),
        };
        if (actualData.password && actualData.confirm_password) {
            if (actualData.password === actualData.confirm_password) {
                document.getElementById('pass-reset-form').reset();
                setError({status: true, msg: "Password Reset Success", type: "success"});
                setTimeout(() => {navigate('/login')} , 3000);
            } else {
                setError({status: true, msg: "Password and Confirm Password doesn't match", type: "error"});
            }
        } else {
            setError({status: true, msg: "Please fill all the fields", type: "error"});
        }

    }
  return (
    <>
    <Grid container justifyContent='center'>
        <Grid item sm={6} xs={12}>
            <h1>Reset Password</h1>
            <Box component='form' noValidate id='pass-reset-form' onSubmit={handleSubmit}>
                <TextField required fullWidth margin='normal' id='password' name='password' label='New Password' type='password'/>
                <TextField required fullWidth margin='normal' id='confirm_password' name='confirm_password' label='Confirm New Password' type='password'/>
                <Box textAlign='center'><Button type='submit' variant='contained' sx={{mt: 3, mb: 2, px:5}}>Submit</Button></Box>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert>: null}
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default ResetPass