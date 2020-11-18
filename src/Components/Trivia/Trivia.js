import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import Questions from './Questions';

export default function Trivia({questions}) {
    return (
        <div>
            {questions?
                <>
                    <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12}>
                            <h3>How much is your bet?</h3>
                            <input></input>
                        </Grid>
                        <Grid item xs={12}>
                            {questions.map((question, index)=>{
                                return(
                                    <Questions key={index} question={question}/>
                                )
                            })}
                        </Grid>
                    </Grid>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};
