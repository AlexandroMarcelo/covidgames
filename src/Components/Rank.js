import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listSeasonsByPoints as ListSeasonsByPoints} from './API/queries';
import { useParams } from "react-router-dom";

export default function Rank({season_id}) {
    const [rank, setRank] = useState([]);
    const [loading, setLoading] = useState(true);
    let { seasonId } = useParams();
    useEffect(() => {
        console.log('season_id', season_id)
        setLoading(true);
        // Get the rank by season id
        API.graphql(graphqlOperation(ListSeasonsByPoints, {seasonId:seasonId, sortDirection:"DESC"}))
        .then( data =>{
            console.log('data', data);
            let rank_data = data.data.listSeasonsByPoints.items;
            console.log('rank_data', rank_data);
            setRank(rank_data);
            setLoading(false);
        })
        .catch( error => {
            console.log("GRAPHQL ERROR ", error);
        })        
    },[season_id])
    return (
        <div style={{margin:"0 10%"}}>
            {!loading?
                <>
                    {rank?
                        <>
                            {(rank.length > 0)?
                                <>
                                    {rank.map((player, index)=>{
                                        return(
                                            <div key={index}>
                                                <h4><span>{index+1}. </span>{player.player.name}: {player.points} points</h4>
                                            </div>
                                        )
                                    })
                                    }
                                </>
                            :
                                <p>Currently there are not other players yet</p>
                            }
                        </>
                        :
                        <>
                        Loading
                        </>
                    }
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};