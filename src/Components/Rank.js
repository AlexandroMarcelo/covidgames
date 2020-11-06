import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';

const rank_data = [
    {
        points: 34232,
        player:{
            name:"Alexandro Marcelo"
        }
    },
    {
        points: 26710,
        player:{
            name:"Juanito Pérez"
        }
    }
]
export default function Rank({season_id}) {
    const [rank, setRank] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Get the rank by season id
        setRank(rank_data);
        setLoading(false);
        
    },[])
    return (
        <div style={{margin:"0 10%"}}>
            {!loading?
                <>
                    {rank?
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