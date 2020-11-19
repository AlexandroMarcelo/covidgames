import React, {useEffect, useState} from 'react';
import { Button, Card, CardActions, CardContent, CircularProgress, Grid } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { getUserByEmail as GetUserByEmail} from './API/queries';
import { createSeasonPlayer as CreateSeasonPlayer } from './API/mutations';
import { useHistory } from "react-router-dom";

export default function Seasons({seasons}) {
    const history = useHistory();

    useEffect(() => {
        console.log('seasons', seasons)
    },[])

    function userHasParticipated(seasons, season_id){
        for (let i = 0; i < seasons.length; i++) {
            const season = seasons[i];
            if (season.season.id == season_id){
                return true
            }
        }
        return false
    }

    const play = (seasonId) => {
        Auth.currentAuthenticatedUser()
        .then(data =>{
            const user_email = data.attributes;
            // Get the user current season
            API.graphql(graphqlOperation(GetUserByEmail, {email:user_email.email}))
            .then( user_data =>{
                const user_info = user_data.data.getUserByEmail.items[0];
                if ( userHasParticipated(user_info.allSeasons.items, seasonId) ) {
                    history.push("/seasons/"+seasonId);
                } else {
                    // Create the new seasonplayer
                    API.graphql(graphqlOperation(CreateSeasonPlayer, { input: {active: true, playerId: user_info.id, points: 0, seasonId: seasonId, type: "seasonplayer"} }))
                    .then( () =>{
                        history.push("/seasons/"+seasonId);
                    })
                    .catch( error => {
                        console.log("GRAPHQL ERROR ", error);
                    })
                }
            })
            .catch( error => {
                console.log("GRAPHQL ERROR ", error);
            })
        })
        .catch(error => {
            console.log('error', error)
        })
    }

    return (
        <div>
            {(seasons.length > 0)?
                <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                    {seasons.map((season, index)=>{
                        return(
                            <Grid item key={index} xs={3}>
                                <Card variant="outlined">
                                    <CardContent>
                                        Season {season.number}
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary" type="submit" style={{margin:"0 auto"}} onClick={()=>{play(season.id)}}>Play</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })

                    }
                </Grid>
                :
                <div>Loading</div>
            }
        </div>
    );
};