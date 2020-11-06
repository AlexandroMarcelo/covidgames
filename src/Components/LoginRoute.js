import React, {useEffect, useState} from 'react';
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import LoadingScreen from './Views/LoadingScreen';
import { useHistory } from "react-router-dom";

export default function LoginRoute({ component: Component, ...rest }) {
    const [authState, setAuthState] = useState(false);
    const [fetchingUser, setFetchingUser] = useState(true);
    const history = useHistory();
    
    useEffect(() => {
        let isMounted = true;
        // Get the user current surgeries and suscription info
		Auth.currentAuthenticatedUser()
        .then(() => {
            if (isMounted){
                setAuthState(true);
                setFetchingUser(false);
            }
        })
        .catch( error => {
            console.log("ERROR AUTH USER", error);
            
            Auth.signOut()
            .then(()=>{ 
                if (isMounted){
                    //console.log(data)
                    history.push("/");
                    setFetchingUser(false);
                }
            })
            .catch(error=>{
                console.log("ERROR AUTH SIGOUT", error)
            })
        })

        return ()=>(isMounted = false);

    }, [history])


    return (
        <>
            {(fetchingUser === false) ?
            <Route
                {...rest}
                render={props => {
                    if (authState){
                        return <Redirect to={'/dashboard'} />
                    } else{
                        return <Component {...props} /> 
                    }
                }
                }
            />
            : 
            <LoadingScreen /> 
            
            }
        </>
    );
};