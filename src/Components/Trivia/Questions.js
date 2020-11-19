import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withStyles } from '@material-ui/core/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { updateSeasonPlayer as UpdateSeasonPlayer } from '../API/mutations';
import { useParams } from "react-router-dom";


export default function Questions(props) {
    const [value, setValue] = React.useState('');

    const questions = props.question;
    const options = props.question.options;
    const points = props.points;
    const season_player_id = props.seasonPlayer.id;
    let { seasonId } = useParams();

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        //setHelperText(' ');
        //setError(false);

    };
    
    function handleSubmit(event)
    {
        let user_bet = -1;
        event.preventDefault();
        console.log('points, props', points, props)
        if ( points >= props.bet ){
            if (value === props.question.answer)
            {
                console.log("Correcto");
                // Sumar puntos que aposto
                if (props.bet === 0)
                {
                    user_bet = 2;
                }
                else if (props.bet === 1)
                {
                    user_bet = 4;
                }
                else if (props.bet === 2)
                {
                    user_bet = 6;
                }
                if ( user_bet !== -1 ) {
                    let new_user_points = points + user_bet;
                    console.log('new_user_points', new_user_points)
                    API.graphql(graphqlOperation(UpdateSeasonPlayer, {"input": {"id": season_player_id, "seasonId": seasonId, "points": new_user_points}}))
                    .then( user_data =>{
                        console.log('user_data', user_data);
                        const user_points = user_data.data.updateSeasonPlayer.points;
                        toast.success("Correct answer! you now have: "+user_points+" points", {
                            position: toast.POSITION.TOP_CENTER, 
                            pauseOnHover: false
                        });
                        props.setPoints(user_points)
                        props.nextQuestion();
                    })
                    .catch( error => {
                        console.log("GRAPHQL ERROR ", error);
                        props.nextQuestion();
                    })
                } else {
                    toast.success("No points won!", {
                        position: toast.POSITION.TOP_CENTER, 
                        pauseOnHover: false
                    });
                }
                
            }
            else 
            {
                console.log('props.bet', props.bet)
                let new_user_points = points - props.bet;
                API.graphql(graphqlOperation(UpdateSeasonPlayer, {"input": {"id": season_player_id, "seasonId": seasonId, "points": new_user_points}}))
                .then( user_data =>{
                    const user_points = user_data.data.updateSeasonPlayer.points;
                    toast.error("Incorrect answer! you now have: "+user_points+" points", {
                        position: toast.POSITION.TOP_CENTER, 
                        pauseOnHover: false
                    });
                    props.setPoints(user_points)
                    props.nextQuestion();
                })
                .catch( error => {
                    console.log("GRAPHQL ERROR ", error);
                    props.nextQuestion();
                })
        }
        }else {
            toast.warning("Not enough points!", {
                position: toast.POSITION.TOP_CENTER, 
                pauseOnHover: false
            });
        }
    }

    const GreenRadio = withStyles({
        root: {
          '&$checked': {
            color: "#52AF77",
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

    return (
        <div>
            {questions?
                <>
                    <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12}>
                            <h3>{questions.question}</h3>
                        </Grid>
                        <form onSubmit={handleSubmit} style={{margin: "0 auto"}}>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            {options.map((option, index)=>{
                                return(
                                    <Grid item key={index} xs={12}>
                                        {/*<button onClick={()=>{handleClick(option)}}>{option}</button>*/}
                                        <FormControlLabel  value={option} control={<GreenRadio />} label={option} />
                                    </Grid>
                                )
                            })

                            }
                            </RadioGroup>
                            <Button type="submit" variant="outlined" color="primary" style={{margin: "20px 0"}}>
                                Answer
                            </Button>
                            </FormControl>
                        </form>
                        <ToastContainer autoClose={5000} />
                    </Grid>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};