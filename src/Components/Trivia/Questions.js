import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

export default function Questions(props) {
    const questions = props.question;
    const options = props.question.options;

    return (
        <div>
            {questions?
                <>
                    <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12}>
                            <h3>{questions.question}</h3>
                        </Grid>
                        {options.map((option, index)=>{
                            return(
                                <Grid item key={index} xs={12}>
                                    <p>{option}</p>
                                </Grid>
                            )
                        })

                        }
                    </Grid>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};