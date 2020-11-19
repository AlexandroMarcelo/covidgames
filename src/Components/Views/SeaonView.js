import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import Season from '../Season';
import Rank from '../Rank';
import CurrentSeason from '../CurrentSeason';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation } from 'aws-amplify';
import { listSeasons as ListSeasons} from '../API/queries';
import { useParams } from "react-router-dom";

export default function SeasonView() {
    const [season, setSeason] = useState({});
    const [loading, setLoading] = useState(true);
    let { seasonId } = useParams();

    useEffect(() => {
        setLoading(true);
        // Get the last season
        API.graphql(graphqlOperation(ListSeasons, {filter: {id: {eq: seasonId}}}))
        .then( data =>{
            // console.log('asdasdasdasdasdasadsadsfadfsdfsadfsa', data);
            let season_data = data.data.listSeasons.items[0];
            setSeason(season_data);
            setLoading(false);
        })
        .catch( error => {
            console.log("GRAPHQL ERROR ", error);
        })
    },[])
    return (
        <div>
            {!loading?
                <>
                    <NavBar/>
                    <h3>Season {season.number}</h3>
                    <Season seasonId={season.id}/>
                    <h3>Rank of Season {season.number}</h3>
                    <Rank season_id={season.id}/>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};