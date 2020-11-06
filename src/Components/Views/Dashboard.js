import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar';
import Season from '../Season';
import Rank from '../Rank';
import CurrentSeason from '../CurrentSeason';
import CircularProgress from '@material-ui/core/CircularProgress';

const season_data = {
    // id: ID!
	// number: Int!
	// startDate: String!
	// endDate: String!
	// leaderboard: [Player]
    // type: String!
    id: "0",
	number: "1",
	startDate: "String!",
	endDate: "String!",
	leaderboard: []
}
export default function Dashboard() {
    const [season, setSeason] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        // Get the last season
        setSeason(season_data);
        setLoading(false);
    },[])
    return (
        <div>
            {!loading?
                <>
                    <NavBar/>
                    <h3>Season {season.number}</h3>
                    <Season/>
                    <h3>Rank of Season {season.number}</h3>
                    <Rank season_id={season.id}/>
                    <h3>My Current rank. Season {season.number}</h3>
                    <CurrentSeason season_id={season.id}/>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};