import React, { useState, useReducer } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify';

//COMPONENTS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import Loading from '@material-ui/core/CircularProgress';

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

//API
import { createPlayer as CreatePlayer} from '../API/mutations';

const initialFormState = {
	password: '', email: '', confirmationCode: '', name: '', birthdate: ''
}

function reducer(state, action) {
	switch(action.type) {
		case 'updateFormState':
		//console.log(action)
		return {
			...state, [action.e.target.name]: action.e.target.value
		}
		case 'updateBirthDate':
		return {
			...state, birthdate: action.e
		}

		default:
		return state
	}
}

function signUp({email, password, name }, setLoading, setMail, setUserName, updateFormType) {
	//THE INPUTS HAS VALUES
	if(email !== "" && password !== "" && name !== ""){
		if (/\s/.test(email)) {
		toast.error("The email cannot contain blank spaces", {
			position: toast.POSITION.TOP_CENTER, 
			pauseOnHover: false
		});
		}
		else{
		email = email.toLowerCase();
		//THE PASSWORD SHOULD BE GREATER OR EQUAL THAN 8 CHARACTERS
		if(password.length >= 8){
			setLoading(true);
			Auth.signUp({
				username: email,
				password,
				attributes: { 
					email, 
					name, 
				}
			})
			.then( userData =>{
				toast.success("Please confirm your account to proceed", {
					position: toast.POSITION.TOP_CENTER, 
					pauseOnHover: false
				});
				setMail(email);	
				setUserName(name);	
				updateFormType('confirmSignUp');
				setLoading(false);
			})
			.catch( error => {
				if(error.code === "UsernameExistsException"){
					toast.error("An account already exist with the email given", {
						position: toast.POSITION.TOP_CENTER, 
						pauseOnHover: false
					});
				}
				else if(error.message ===  "Invalid email address format."){
					toast.error("Make sure the email is valid", {
						position: toast.POSITION.TOP_CENTER, 
						pauseOnHover: false
					});
				}
				else{
					toast.error("Error. Creating User. Please contact us if the error persists. (Code: " + error.code + ")", {
						position: toast.POSITION.TOP_CENTER, 
						pauseOnHover: false
					});
					console.log(error);
				}
				setLoading(false);
			})
			
		}else{ //PASSWORD LOWER THAN 6
			toast.error("Password length must be equal or more than 8 characters", {
				position: toast.POSITION.TOP_CENTER, 
				pauseOnHover: false
			});
		}
		}
	}else{ //THE INPUTS HAS NOT VALUES
		toast.error("Fields cannot be empty", {
			position: toast.POSITION.TOP_CENTER, 
			pauseOnHover: false
		});
	}
}

function resendCode(userMail){
	Auth.resendSignUp(userMail).then(() => {
		toast.success(`The code was send to: ${userMail}`, {
		position: toast.POSITION.TOP_CENTER
		});
	}).catch(e => {
		console.log(e);
		toast.success("Error. Sendig Code. Please contact us if the error persists. (Code: " + e.code + ")", {
			position: toast.POSITION.TOP_CENTER, 
			pauseOnHover: false
		});
	});
}

function confirmSignUp({ confirmationCode }, setLoading, userMail, userName, updateFormType) {
	setLoading(true);
	// Constructor for the global config.
	const params = {
		input:{
			email: userMail,
			name: userName
		}
	}
	API.graphql(graphqlOperation(CreatePlayer, params))
	.then( newUserData =>{
		console.log('newUserData', newUserData)
		Auth.confirmSignUp(userMail, confirmationCode)
		.then(response => {
			console.log('response', response)
			toast.success("Great! Account created. Enjoy yourself", {
				position: toast.POSITION.TOP_CENTER
			});
			setLoading(false);
			updateFormType('signIn')
		})
		.catch(error => {
			setLoading(false);
			if(error.message === "Confirmation code cannot be empty"){
				toast.error("The code cannot be empty", {
				position: toast.POSITION.TOP_CENTER, 
				pauseOnHover: false
				});
			}
			else if(error.message === "Invalid verification code provided, please try again." || error.code === "InvalidParameterException"){
				toast.error("Invalid Code", {
				position: toast.POSITION.TOP_CENTER, 
				pauseOnHover: false
				});
			}
			else{
				toast.error("Error. User Creationg. Please contact us if the error persists. (Code: " + error.code + ")", {
				position: toast.POSITION.TOP_CENTER, 
				pauseOnHover: false
				});
			}
			console.log("ERROR",error)
		})
		//console.log(returndata.body.event.nombre)
	})
	.catch( error => {
		console.log("GRAPHQL ERROR ", error)
	})
}

function forgotPassword({ mail }, setUserMail, updateFormType) {
	setUserMail(mail);
	Auth.forgotPassword(mail)
	.then(data => {
		//console.log(data);
		toast.success("An email with a code was send to you", {
			position: toast.POSITION.TOP_CENTER,
			pauseOnHover: false
		});
		updateFormType("forgotPasswordSubmit")
	})
	.catch(err => {
		if(err.message === "Username cannot be empty"){
			toast.error("The email must be correct", {
			position: toast.POSITION.TOP_CENTER,
			pauseOnHover: false
			});
		}
		else if (err.code === "UserNotFoundException"){
			toast.error("User not found", {
			position: toast.POSITION.TOP_CENTER,
			pauseOnHover: false
			});
		}
		else{
			toast.error("Error. Changing Password. Please contact us if the error persists. (Code: "+err.code+")", {
			position: toast.POSITION.TOP_CENTER,
			pauseOnHover: false
			});
			//console.log(err);
		}
	});
}

function forgotPasswordSubmit({ code, new_password }, userMail, updateFormType) {
	Auth.forgotPasswordSubmit(userMail, code, new_password)
	.then(data => {
		//console.log(data); no imprime nada
		toast.success("Password successfully changed", {
		position: toast.POSITION.TOP_CENTER,
		pauseOnHover: false
		});
		updateFormType("signIn")
	})
	.catch(err => {
		toast.error("Error. Password Change. Please contact us if the error persists. (Code: " + err.code + ")", {
		position: toast.POSITION.TOP_CENTER,
		pauseOnHover: false
		});
		console.log(err);
	});
}

function signIn({ email, password }, setLoading, setUserMail, updateFormType, history) {
	if(email !== "" && password !== ""){
		setLoading(true);
		// Try to authenticate with cognito 
		email=email.toLowerCase();
		Auth.signIn(email, password)
		.then(()=>{
			history.push("/dashboard");
		})
		.catch(err=>{
			if(err.code === "UserNotConfirmedException"){
				toast.error("Account not confirmed", {
				position: toast.POSITION.TOP_CENTER,
				pauseOnHover: false     
				});      
			}
			else if(err.code === "UserNotFoundException"){
				toast.error("User not found", {
				position: toast.POSITION.TOP_CENTER,
				pauseOnHover: false     
				});
			}
			else if(err.code === "NotAuthorizedException"){
				toast.error("Incorrect password", {
				position: toast.POSITION.TOP_CENTER,
				pauseOnHover: false     
				});
			}
			else if(err.code === "InvalidParameterException"){
				toast.error("The email must be valid", {
				position: toast.POSITION.TOP_CENTER,
				pauseOnHover: false     
				});
			}
			else{
				toast.error("Error. SignIn. Please contact us if the error persists. (Code: " + err.code + ")", {
				position: toast.POSITION.TOP_CENTER,
				pauseOnHover: false     
				}); 
				console.log(err)     
			}
			setLoading(false);

			if(err.code === "UserNotConfirmedException"){
				setUserMail(email);
				updateFormType('confirmSignUp');
			}
			else{
				updateFormType('signIn');
			}
		})
	} 
	else{
		toast.error("You must type your email and password", {
		position: toast.POSITION.TOP_CENTER,
		pauseOnHover: false     
		}); 
	}
}

export default function Form() {
	const [formType, updateFormType] = useState("signIn");
	const [formState, updateFormState] = useReducer(reducer, initialFormState);

	const [loading, setLoading] = useState(false);
	const [userMail, setUserMail] = useState("");
	const [userName, setUserName] = useState("");
	const history = useHistory();

	function renderForm() {
		switch(formType) {
		case 'signUp':
			return (
				<SignUp
					loading={loading}
					signUp={() => signUp(formState, setLoading, setUserMail, setUserName, updateFormType)}
					updateFormState={e => updateFormState({ type: 'updateFormState', e })}
					updateFormStatee={e => updateFormState({ type: 'updateBirthDate', e })}
				/>
			)
		case 'confirmSignUp':
			return (
				<ConfirmSignUp
					loading={loading}
					userMail={userMail}
					confirmSignUp={() => confirmSignUp(formState, setLoading, userMail, userName, updateFormType)}
					updateFormState={e => updateFormState({ type: 'updateFormState', e })}
				/>
			)
		case 'signIn':
			return (
				<SignIn
					loading={loading}
					signIn={() => signIn(formState, setLoading, setUserMail, updateFormType, history)}
					updateFormState={e => updateFormState({ type: 'updateFormState', e })}
				/>
			)
		case 'forgotPassword':
			return (
				<ForgotPassword
					forgotPassword={() => forgotPassword(formState, setUserMail, updateFormType)}
					updateFormState={e => updateFormState({ type: 'updateFormState', e })}
				/>
			)
		case 'forgotPasswordSubmit':
			return (
				<ForgotPasswordSubmit
					forgotPasswordSubmit={() => forgotPasswordSubmit(formState, userMail, updateFormType)}
					updateFormState={e => updateFormState({ type: 'updateFormState', e })}
				/>
			)

		default:
			return null
		}
	}


	return (
		<div>
			<p style={styles.title}>
				Knowledge Rally!
			</p>
			{
				formType === 'signUp' && (
				<p style={styles.title}>
					Sign Up
				</p>
				)
			}
			{
				formType === 'signIn' && (
				<p style={styles.title}>
					Sign In
				</p>
				)
			}
			{
				formType === 'confirmSignUp' && (
				<p style={styles.title}>
					Confirm
				</p>

				)
			}
			{
				formType === 'forgotPasswordSubmit' && (
				<p style={styles.title}>
					Recover
				</p>

				)
			}
			{
				formType === 'forgotPassword' && (
				<p style={styles.title}>
					Recover
				</p>

				)
			}
		<div>
			{renderForm(formState)}
		</div>
		{
			formType === 'signUp' && (
			<p style={styles.footer}>
				You already have an account? <span
				style={styles.anchor}
				onClick={() => updateFormType('signIn')}
				>Sign In</span>
			</p>
			)
		}
		{
			formType === 'signIn' && (
			<>
			<p style={styles.footer}>
				Need an account? <span
				style={styles.anchor}
				onClick={() => updateFormType('signUp')}
				>Create one</span>
			</p>
			<p style={styles.footer}>
				Forgot your password? <span
				style={styles.anchor}
				onClick={() => updateFormType('forgotPassword')}
				>Recover</span>
			</p>
			{/* <p style={styles.footer}> When sign in, you accept the    
				<a href="/terminos-y-condiciones" style={{textDecoration: 'none'}}>
								terms and Conditions
							</a> 
				of covidrally.</p> */}
			</>
			)
		}
		{
			formType === 'confirmSignUp' && (
			<>
			<p style={styles.footer}>
				<span
				style={styles.anchor}
				onClick={()=>resendCode(userMail)}
				>Resend code</span>
			</p>
			</>

			)
		}
		{
			formType === 'forgotPassword' && (
			<p style={styles.footer}>
				<span
					style={styles.anchor}
					onClick={() => updateFormType('signIn')}>
					Back
				</span>
			</p>

			)
		}
		<ToastContainer autoClose={5000} />
		</div>
	)
}

function SignUp(props) {

	return (
		<div style={styles.container}>
			<form>
				<TextField
					style={styles.input}
					name='name'
					id="name"
					label="Full Name"
					placeholder='Luis Carrasca'
					InputLabelProps={{
						shrink: true,
					}}
					variant="outlined"
					onChange={e => {e.persist();props.updateFormState(e)}}
				/>
				<TextField
					style={styles.input}
					name='email'
					id="email"
					label="Email"
					placeholder='example@gmail.com'
					InputLabelProps={{
					shrink: true,
					}}
					variant="outlined"
					onChange={e => {e.persist();props.updateFormState(e)}}
				/>

				<TextField
					style={styles.input}
					name='password'
					id="password"
					label="Password"
					placeholder='******'
					type='password'
					InputLabelProps={{
					shrink: true,
					}}
					variant="outlined"
					onChange={e => {e.persist();props.updateFormState(e)}}
				/>

				{(props.loading === false) ?
				<Button variant="contained" color="primary" onClick={(e)=>{e.preventDefault(); props.signUp()}} style={styles.button}>
					Create your account
				</Button>
				: <Button style={styles.button} onClick={(e)=>{e.preventDefault()}} disabled>
					<Loading/>
				</Button>
					}
			</form>
		</div>
	)
	}

	function SignIn(props) { 
	return (
		<div style={styles.container}>
			<form>
				<TextField
					style={styles.input}
					name='email'
					id="email"
					label="Email"
					placeholder='ejemplo@gmail.com'
					InputLabelProps={{
					shrink: true,
					}}
					variant="outlined"
					onChange={e => {e.persist();props.updateFormState(e);}}
				/>
				<TextField
					style={styles.input}
					type='password'
					name='password'
					id="password"
					label="Password"
					placeholder='******'
					InputLabelProps={{
					shrink: true,
					}}
					variant="outlined"
					onChange={e => {e.persist();props.updateFormState(e)}}
				/>

				{(props.loading === false) ? 
				<Button variant="contained" color="primary" type="submit" style={styles.button} onClick={(e)=>{e.preventDefault(); props.signIn()}}>Continue</Button>
				: <Button style={styles.button} onClick={(e)=>{e.preventDefault()}} disabled> <Loading/> </Button> }
				
			</form>
		</div>
	)
}

function ForgotPassword(props) { 
	return (
		<div style={styles.container}>
		<TextField
			style={styles.input}
			name='mail'
			id="mail"
			label="Email"
			placeholder='ejemplo@gmail.com'
			InputLabelProps={{
			shrink: true,
			}}
			variant="outlined"
			onChange={e => {e.persist();props.updateFormState(e)}}
		/>
			<Button variant="contained" color="primary" style={styles.button} onClick={props.forgotPassword}>Send code</Button>
		
		</div>
	)
}

function ForgotPasswordSubmit(props) { 
	return (
		<div style={styles.container}>
		<input 
			name='code'
			onChange={e => {e.persist();props.updateFormState(e)}}
			style={styles.input}
				placeholder='Confirmation code'
		/>
		<TextField
			style={styles.input}
			name='code'
			id="code"
			label="Confirmation code"
			placeholder='######'
			InputLabelProps={{
			shrink: true,
			}}
			variant="outlined"
			onChange={e => {e.persist();props.updateFormState(e)}}
		/>
		<TextField
			style={styles.input}
			name='new_password'
			id="new_password"
			type="password"
			label="New password"
			placeholder='******'
			InputLabelProps={{
			shrink: true,
			}}
			variant="outlined"
			onChange={e => {e.persist();props.updateFormState(e)}}
		/>
			<Button variant="contained" color="primary" style={styles.button} onClick={props.forgotPasswordSubmit}>Update password</Button>
		
		</div>
	)
}

function ConfirmSignUp(props) {
	return (
		<div style={styles.container}>
		<form>
			<TextField
			style={styles.input}
			name='confirmationCode'
			id="confirmationCode"
			label="Código de confirmación"
			placeholder='######'
			InputLabelProps={{
			shrink: true,
			}}
			variant="outlined"
			onChange={e => {e.persist();props.updateFormState(e)}}
		/>
		{(props.loading === false) ? 
		<Button variant="contained" color="primary" type="submit" style={styles.button} onClick={(e)=>{e.preventDefault(); props.confirmSignUp()}}>Confirm code</Button>
		: <Button style={styles.button} onClick={(e)=>{e.preventDefault()}} disabled> <Loading /> </Button> }
		</form>
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		//marginTop: 150,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '1em'
	},
	input: {
		marginTop: '1em',
		width: '95%',
	},
	button: {
		width: '50%',
		height: 45,
		marginTop: 25,

	},
	footer: {
		fontWeight: '200',
		padding: '0px 25px',
		textAlign: 'center',
		color: 'rgba(0, 0, 0, 0.5)'
	},
	title: {
		fontWeight: '400',
		padding: '0px 25px',
		textAlign: 'center',
		color: 'rgb(0, 0, 255)', 
		fontSize: '1.5em',
		margin: '0.7em 0 0.4em 0'
	},
	anchor: {
		color: 'blue',
		cursor: 'pointer'
	}
}