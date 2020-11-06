import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingScreen = () => {
    return(
        <div style={{ display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh'}}>
            <CircularProgress
                size={15}
                color={"inherit"}
                />
        </div>
    );
} 
export default LoadingScreen;