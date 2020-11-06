import React, {useEffect, useState} from 'react';
import { Button, Card, CardActions, CardContent, CircularProgress, Grid } from '@material-ui/core';

const questions = [
    // id: ID!
	// question: String!
	// answer: String!
	// options: [String]
    // topic: String!
    {
        id:"0",
        question:"Q1",
        answer:"A1",
        options:["A1","A2","A3"],
        topic:"History"
    },
    {
        id:"1",
        question:"Q1",
        answer:"A1",
        options:["A1","A2","A3"],
        topic:"History"
    },
    {
        id:"2",
        question:"Q1",
        answer:"A1",
        options:["A1","A2","A3"],
        topic:"Chemistry"
    },
    {
        id:"3",
        question:"Q1",
        answer:"A1",
        options:["A1","A2","A3"],
        topic:"Math"
    },
    {
        id:"4",
        question:"Q1",
        answer:"A1",
        options:["A1","A2","A3"],
        topic:"Math"
    },
]
export default function Season() {
    // const [season, setSeason] = useState(questions);
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getTopics = (questions) => {
            let topics_data = {};
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                const key = question["topic"]
                if (key in topics_data) {
                    topics_data[key].push(question);
                }
                else{
                    topics_data[key] = [question];
                }
            }
            return topics_data;
        }
        // Get all questions
        let topics_data = getTopics(questions);
        console.log('topics_data', topics_data)
        setTopics(topics_data);
        setLoading(false);
    },[])
    return (
        <div>
            {!loading?
                <>
                    {(topics)?
                        <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                            {Object.keys(topics).map((topic, index)=>{
                                return(
                                    <Grid item key={index} xs={3}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                {topic}
                                            </CardContent>
                                            <CardActions>
                                                <Button color="primary" type="submit" style={{margin:"0 auto"}}>Play</Button>
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
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};