import React,  {useState} from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import Questions from './Questions';
import NavBar from '../NavBar';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Slider from '@material-ui/core/Slider';



export default function Trivia({questions, seasonPlayer, updatePoints, points}) {
    const [bet, setBet] = useState(2);
    const [counter, setCounter] = useState(0);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Too lale...</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
      };

    function handleChange(event, newValue)
    {
        setBet(newValue);
    }

    return (
        <div>
            {questions?
                <>
                <NavBar/>
                    <h4>Total points: {points}</h4>
                    <Grid item xs={12}>    
                        <Grid item xs={12}>
                        <h3>Bet amount</h3>
                            <Slider 
                                value={bet}
                                defaultValue={2}
                                valueLabelDisplay="auto"
                                value={bet}
                                defaultValue={2}
                                valueLabelDisplay="auto"
                                value={bet}
                                defaultValue={2}
                                valueLabelDisplay="auto"
                                step={1}
                                min={0}
                                max={2}
                                style={{width: "20%", color: "#52AF77"}}
                                onChange={handleChange}
                            />
                            <p>{bet}</p>
                                <Questions  question={questions[counter]} bet={bet} nextQuestion={()=>setCounter(counter + 1)} points={points} setPoints={updatePoints} seasonPlayer={seasonPlayer}/>
                                <br/>
                                {/*<button onClick={()=>{setCounter(counter + 1)}}>Next</button>*/}
                                {/*<p>{counter}</p>*/}
                            </Grid>
                        <Grid item xs={12}>
                        
                        <div className="timer-wrapper">
                            <CountdownCircleTimer
                                isPlaying
                                key={counter}
                                duration={25}
                                colors={[["#52AF77", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                                onComplete={() => {
                                    // do your stuff here
                                    setCounter(counter + 1)
                                    return [true, 500] // repeat animation in 0.5 seconds
                                }}
                                >
                                {renderTime}
                            </CountdownCircleTimer>
                        </div>
                            
                        </Grid>
                        
                        
                    </Grid>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};
