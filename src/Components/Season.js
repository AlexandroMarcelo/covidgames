import React, {useEffect, useState} from 'react';
import { Button, Card, CardActions, CardContent, CircularProgress, Grid } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listQuestions as ListQuestions} from './API/queries';
import { useHistory } from "react-router-dom";

export default function Season({seasonId}) {
    // const [season, setSeason] = useState(questions);
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
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
        API.graphql(graphqlOperation(ListQuestions))
        .then( data =>{
            let topics_data = getTopics(data.data.listQuestions.items);
            // let topics_data = getTopics(questions);
            // console.log('topics_data', topics_data);
            setTopics(topics_data);
            setLoading(false);
        })
        .catch( error => {
            console.log("GRAPHQL ERROR ", error);
        })
    },[])

    const play = (topic) => {
        history.push("/play/"+topic+"/"+seasonId);
    }

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
                                                <Button color="primary" type="submit" style={{margin:"0 auto"}} onClick={()=>{play(topic)}}>Play</Button>
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