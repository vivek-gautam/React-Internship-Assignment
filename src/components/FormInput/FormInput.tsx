import { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { isValidUser } from '../../contexts/userContext'

export const FormInput = ({ updated }: { updated: any }) => {
    const userObject = isValidUser();
    const [Name, setName] = useState<string>("");
    const [PhoneNo, setPhoneNo] = useState<string>("");
    const [Email, setEmail] = useState<string>("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('Name', Name);
        localStorage.setItem('PhoneNo', PhoneNo);
        localStorage.setItem('Email', Email);
        userObject.setUser(true);
        updated(1)
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField label="Name" value={Name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value);
                    }} placeholder='Enter the Name' required />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField type='number' label="Phone" value={PhoneNo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPhoneNo(e.target.value);
                    }} placeholder='Enter Phone Number' required />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField type='email' label="Email" value={Email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                    }} placeholder='Enter Email Address' required />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button type='submit' variant='contained' color='primary'>SUBMIT</Button>
                </Grid>
            </Grid>
        </form>
    )
}
