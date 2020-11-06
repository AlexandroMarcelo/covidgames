import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Login(){
    const [userInfoSignin, setUserInfoSignin] = useState({
        name:'',
        last_name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        
    }, [])
        
        const handleChange = (event) => {
            setUserInfoSignin(userInfoSignin => ({...userInfoSignin, [event.target.name]:event.target.value}));
        };
        function handleSubmit(){
            setLoading(true);
            if (userInfoSignin.email !== "" && userInfoSignin.name !== "" && userInfoSignin.last_name !== "") {
                if(validateEmail(userInfoSignin.email)){
                    if(validateName(userInfoSignin.name)){
                        if(validateName(userInfoSignin.last_name)){
                            setError("");
                            console.log('userInfoSignin', userInfoSignin)
                        }
                        else{
                            setError("*Enter a valid last name (without symbols and numbers)");
                            setLoading(false);
                        }
                    }
                    else{
                        setError("*Enter a valid first name (without symbols and numbers)");
                        setLoading(false);
                    }
                }
                else{
                    setError("*Enter a valid email");
                    setLoading(false);
                }
            }
            else{
                setError("*Fill them with your information");
                setLoading(false);
            }
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function validateName(name) {
        var re = /^[a-zA-Z]+$/;
        return re.test(String(name));
    }

    return (
        <div style={{padding:"0 30%"}}>
            <Grid container direction="row" alignContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <p >Sign Up</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        required
                        id="email"
                        label="Email"
                        onChange={(e) => {e.persist(); handleChange(e)}}
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="name"
                        variant="outlined"
                        required
                        type="fname"
                        id="fname"
                        label="First name"
                        onChange={(e) => {e.persist(); handleChange(e)}}
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="last_name"
                        variant="outlined"
                        required
                        id="last_name"
                        label="Last name"
                        onChange={(e) => {e.persist(); handleChange(e)}}
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        id="password"
                        label="Password"
                        type="password"
                        onChange={(e) => {e.persist(); handleChange(e)}}
                        />
                </Grid>
                <Grid item xs={12}>
                    {!loading?
                        <Button
                            style={{margin:"1em", width:"20em"}}
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={(e) => {e.preventDefault(); handleSubmit()}}
                            >
                            Continue
                        </Button>
                        :
                        <CircularProgress/>
                    }
                    <p className={"trivia-rsFont"} style={{paddingTop:"0.5em", margin:"0"}}>{error}</p>
                    <p className={"trivia-rsFont"} style={error? {display:"none"}: {color:"white"}}>.</p>
                </Grid>
            </Grid>
        </div>
    )
                   
}

export default Login;