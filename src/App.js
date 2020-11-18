import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from './Components/Views/Login/Login'
import Login from './Components/Views/Form'
import Dashboard from './Components/Views/Dashboard'
import Play from './Components/Views/Play'
import NotFound from './Components/Views/NotFound'
import AuthenticatedRoutes from './Components/AuthenticatedRoutes';
import LoginRoute from './Components/LoginRoute';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
			<BrowserRouter> 
				<div style={{fontFamily:'Nunito'}}>
					<Switch >
						<LoginRoute
							exact path="/" 
							component={Login}
							/>
						<AuthenticatedRoutes
							exact path="/dashboard" 
							component={Dashboard}
							/>
						<AuthenticatedRoutes
							exact path="/play/:topic" 
							component={Play}
							/>
						<Route component={NotFound}></Route>
					</Switch>
				</div>
			</BrowserRouter>
    </div>
  );
}

export default App;
