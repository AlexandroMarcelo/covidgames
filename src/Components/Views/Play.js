import React, {useEffect, useState} from 'react';
import NotFound from './NotFound';
import Trivia from '../Trivia/Trivia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listQuesionsByTopic as ListQuesionsByTopic, listSeasonByPlayer as ListSeasonByPlayer, getUserByEmail as GetUserByEmail} from '../API/queries';
import { useParams } from "react-router-dom";

export default function Play() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seasonPlayer, setSeasonPlayer] = useState(-1);
    const [points, setPoints] = useState(null);
    let { topic, seasonId } = useParams();
    useEffect(() => {
        const randomSort = (array) => {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        //SeasonPlayer
        Auth.currentAuthenticatedUser()
        .then(data =>{
            const user_email = data.attributes;
            // Get the user current season
            API.graphql(graphqlOperation(GetUserByEmail, {email:user_email.email}))
            .then( user_data =>{
                // console.log('data', data);
                
                const user_id = user_data.data.getUserByEmail.items[0].id;
                // console.log('user_data', user_data);
                API.graphql(graphqlOperation(ListSeasonByPlayer, {"playerId": {"eq": user_id}, seasonId: seasonId}))
                .then( data =>{
                    // console.log('data', data);
                    let season_player = data.data.listSeasonByPlayer.items[0];
                    // console.log('season_player', season_player);
                    setPoints(season_player.points);
                    setSeasonPlayer(season_player);
                    setLoading(false);
                })
                .catch( error => {
                    console.log("GRAPHQL ERROR seasossdas", error);
                    setLoading(false);
                })
            })
            .catch( error => {
                console.log("GRAPHQL ERROR ", error);
            })
        })
        .catch(error => {
            console.log('error', error)
        })
        // Get the questions
        API.graphql(graphqlOperation(ListQuesionsByTopic, {topic:topic}))
        .then( data =>{
            // console.log('data', data);
            let questions_data = data.data.listQuesionsByTopic.items;
            // console.log('questions_data', questions_data);
            setQuestions(randomSort(questions_data));
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
                    {(questions.length > 0 && points !== -1)?
                        <>
                            
                            <Trivia questions={questions} updatePoints={setPoints} points={points} seasonPlayer={seasonPlayer}/>
                        </>
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