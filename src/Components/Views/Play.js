import React, {useEffect, useState} from 'react';
import NotFound from './NotFound';
import Trivia from '../Trivia/Trivia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation } from 'aws-amplify';
import { listQuesionsByTopic as ListQuesionsByTopic} from '../API/queries';
import { useParams } from "react-router-dom";

export default function Play() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    let { topic } = useParams();
    useEffect(() => {
        // Get the last season
        API.graphql(graphqlOperation(ListQuesionsByTopic, {topic:topic}))
        .then( data =>{
            // console.log('data', data);
            let questions_data = data.data.listQuesionsByTopic.items;
            console.log('questions_data', questions_data);
            setQuestions(questions_data);
            setLoading(false);
        })
        .catch( error => {
            console.log("GRAPHQL ERROR ", error);
            setLoading(false);
        })
    },[topic])
    return (
        <div>
            {!loading?
                <>
                    {(questions.length > 0)?
                        <Trivia questions={questions}/>
                        :
                        <NotFound/>
                    }
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};