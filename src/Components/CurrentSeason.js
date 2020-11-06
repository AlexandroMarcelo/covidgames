import React, {useEffect, useState} from 'react';
import { Auth } from 'aws-amplify';
import CircularProgress from '@material-ui/core/CircularProgress';

const season_data = {
        id: "00",
        points: 34232,
        answeredQuestions: [
            {
                question: {
                    id: "Q0",
                    question: "Q0",
                    answer: "A1",
                    options: ["A1", "A2", "A3"],
                    topic: "History"
                },
                givenAnswer: "A1",
                correct: true,
                bet: 120,
                timeToAnswer: "342"
            },
            {
                question: {
                    id: "Q1",
                    question: "Q1",
                    answer: "A2",
                    options: ["A1", "A2", "A3"],
                    topic: "History"
                },
                givenAnswer: "A3",
                correct: false,
                bet: 56,
                timeToAnswer: "798"
            }
        ]
    }

export default function CurrentSeason() {
    const [season, setSeason] = useState({});

    useEffect(() => {
        Auth.currentAuthenticatedUser()
        .then(user_data =>{
            console.log('user_data', user_data);
            // Get the user current season
            setSeason(season_data);
        })
        .catch(error => {
            console.log('error', error)
        })
    },[])
    return (
        <div style={{margin:"0 10%"}}>
            {season?
                <div>
                    <p>You have collected {season.points} points in this season</p>
                </div>
                :
                <CircularProgress/>
            }
                
        </div>
    );
};