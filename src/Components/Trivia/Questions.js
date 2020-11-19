import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withStyles } from '@material-ui/core/styles';


export default function Questions(props) {
    const [value, setValue] = React.useState('');

    const questions = props.question;
    const options = props.question.options;

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        //setHelperText(' ');
        //setError(false);

    };
    
    function handleSubmit(event)
    {

        event.preventDefault();

        if (value === props.question.answer)
        {
            console.log("Correcto");
            // Sumar puntos que aposto
            if (props.bet === 0)
            {
                console.log("+" + 2);
            }
            else if (props.bet === 1)
            {
                console.log("+" + 4);
            }
            else if (props.bet === 2)
            {
                console.log("+" + 6);
            }

            toast.success("Respuesta correcta ", {
                position: toast.POSITION.TOP_CENTER, 
                pauseOnHover: false
            });

            props.nextQuestion();
            
        }
        else 
        {
            console.log("Incorrecto");
            // Restar puntos que aposto
            console.log("-" + props.bet);

            toast.error("Respuesta incorrecta ", {
                position: toast.POSITION.TOP_CENTER, 
                pauseOnHover: false
            });

            props.nextQuestion();
        }
    }

    const GreenRadio = withStyles({
        root: {
          '&$checked': {
            color: "#52AF77",
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

    return (
        <div>
            {questions?
                <>
                    <Grid container direction="row" alignContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12}>
                            <h3>{questions.question}</h3>
                        </Grid>
                        <form onSubmit={handleSubmit} style={{margin: "0 auto"}}>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            {options.map((option, index)=>{
                                return(
                                    <Grid item key={index} xs={12}>
                                        {/*<button onClick={()=>{handleClick(option)}}>{option}</button>*/}
                                        <FormControlLabel  value={option} control={<GreenRadio />} label={option} />
                                    </Grid>
                                )
                            })

                            }
                            </RadioGroup>
                            <Button type="submit" variant="outlined" color="primary" style={{margin: "20px 0"}}>
                                Answer
                            </Button>
                            </FormControl>
                        </form>
                        <ToastContainer autoClose={5000} />
                    </Grid>
                </>
                :
                <CircularProgress/>
            }
        </div>
    );
};