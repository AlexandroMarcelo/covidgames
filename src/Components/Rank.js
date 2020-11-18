import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listSeasonsByPoints as ListSeasonsByPoints} from './API/queries';

// const rank_data = [
//     {
//         points: 34232,
//         player:{
//             name:"Alexandro Marcelo"
//         }
//     },
//     {
//         points: 26710,
//         player:{
//             name:"Juanito Pérez"
//         }
//     }
// ]
export default function Rank({season_id}) {
    const [rank, setRank] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Get the rank by season id
        API.graphql(graphqlOperation(ListSeasonsByPoints, {seasonId:season_id, sortDirection:"ASC"}))
        .then( data =>{
            // console.log('data', data);
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
                                                <h4><span>{index}. </span>{player.player.name}</h4>
                                                <p>{player.points}</p>
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