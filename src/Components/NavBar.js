import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core'
import { Auth } from 'aws-amplify';

export default function Dashboard() {
    const history = useHistory();
    const logOut = (e) => {
        e.preventDefault();
        Auth.signOut()
        .then(()=>{
            history.push("/");
        })
        .catch(error => {
            console.log('Log Out Error :>> ', error);
        })
    }
    return (
        <>
            <Grid container direction="row" alignContent="center" alignItems="center" style={{backgroundColor:"rgba(0,0,255,.3)"}}>
                <Grid item xs={4} sm={2}>
                    <h3 onClick={(e)=>{e.preventDefault(); history.push("/dashboard")}} style={{cursor:"pointer", textAlign:"left", padding:"0 0 0 10%"}} >Knowledge Rally!</h3>
                </Grid>
                <Grid item xs={2} sm={6}>

                </Grid>
                <Grid item xs={6} sm={4}>
                    <h3 onClick={(e)=>{logOut(e)}} style={{cursor:"pointer", textAlign:"right", padding:"0 10% 0 0"}} >Log Out</h3>
                </Grid>
            </Grid>
        </>
    );
};