import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import Seasons from '../Seasons';
import CircularProgress from '@material-ui/core/CircularProgress';
import { API, graphqlOperation } from 'aws-amplify';
import { listSeasons as ListSeasons} from '../API/queries';

export default function Dashboard() {
    const [seasons, setSeasons] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        // Get the last season
        API.graphql(graphqlOperation(ListSeasons))
        .then( data =>{
            let season_data = data.data.listSeasons.items;
            // console.log('topics_data', season_data);
            setSeasons(season_data);
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
                    <h4>Current seasons available</h4>
                    <Seasons seasons={seasons}/>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};