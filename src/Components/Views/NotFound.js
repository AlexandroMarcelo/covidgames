import React from 'react';

const LoadingScreen = () => {
    return(
        <div style={{ display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh'}}>
            <h1>404 Not Found</h1>
        </div>
    );
} 
export default LoadingScreen;