import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY:'scroll'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth: '600px',
      maxHeight: '100% !important',
      overflowY:'scroll'
    },
}));

function Form(props){
    const [userInfoSignin, setUserInfoSignin] = useState({
        name:'',
        last_name: '',
        email: '',
        password: ''
    });
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        
    }, [])
        
        const handleChange = (event) => {
            setUserInfoSignin(userInfoSignin => ({...userInfoSignin, [event.target.name]:event.target.value}));
        };
        function handleSubmit(){
            if (userInfoSignin.email !== "" && userInfoSignin.name !== "" && userInfoSignin.last_name !== "") {
                if(validateEmail(userInfoSignin.email)){
                    if(validateName(userInfoSignin.name)){
                        if(validateName(userInfoSignin.last_name)){
                            setError("");
                            console.log('userInfoSignin', userInfoSignin)
                        }
                        else{
                            setError("*Ingresa un apellido válido (Sin espacios, ni acentos, ni números)");
                            setLoading(false);
                        }
                    }
                    else{
                        setError("*Ingresa un nombre válido (Sin espacios, ni acentos, ni números)");
                        setLoading(false);
                    }
                }
                else{
                    setError("*Ingresa un correo válido");
                    setLoading(false);
                }
            }
            else{
                setError("*Ingresa tu correo y nombre");
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
        <div>
            <Grid container direction="row" alignContent="center" alignItems="center">
                <Grid item xs={12}>
                    <p >Sign Up</p>
                    <form style={{textAlign:"center"}} noValidate>
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
                            <br/>
                        <TextField
                            fullWidth
                            autoComplete="fname"
                            name="name"
                            variant="outlined"
                            required
                            id="name"
                            label="First name"
                            onChange={(e) => {e.persist(); handleChange(e)}}
                            />
                        <TextField
                            fullWidth
                            autoComplete="lname"
                            name="last_name"
                            variant="outlined"
                            required
                            id="last_name"
                            label="Last name"
                            onChange={(e) => {e.persist(); handleChange(e)}}
                            />
                        <TextField
                            fullWidth
                            autoComplete="lname"
                            name="last_name"
                            variant="outlined"
                            required
                            id="last_name"
                            label="Password"
                            onChange={(e) => {e.persist(); handleChange(e)}}
                            />
                            <Button
                                style={{margin:"1em", width:"20em"}}
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={(e) => {e.preventDefault(); handleSubmit()}}
                                >
                                Continue
                            </Button>
                    <p className={"trivia-rsFont"} style={{paddingTop:"0.5em", margin:"0"}}>{error}</p>
                    <p className={"trivia-rsFont"} style={error? {display:"none"}: {color:"white"}}>.</p>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
                   
}

export default Form;