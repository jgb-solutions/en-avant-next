import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import Head from 'next/head'
// import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { firebase, Auth, User } from 'services/firebase'

// import theme from '../src/theme'
import { APP_NAME } from '../utils/constants'
import { AppContext, UserInterface, AppProvider, AppProviderData } from 'store/app-context'
import 'styles/react-transitions.css'
import "styles/styles.css"

export default function MyApp(props: AppProps) {
	const [appState, setAppState] = useState<AppProvider>(AppProviderData)
	const [authData, setAuthData] = useState<null | firebase.User>(null)
	const [userData, setUserData] = useState<UserInterface | undefined>(undefined)
	const [userDataForDb, setUserDataForDb] = useState<undefined | UserInterface>(undefined)

	const { Component, pageProps } = props

	useEffect(() => {
		const unsubscribeToAuthEvent = Auth.onAuthStateChanged(AuthDataChanged => {
			setAuthData(AuthDataChanged)
			console.log(AuthDataChanged)
		})

		return () => {
			unsubscribeToAuthEvent()
		}
	}, [])

	useEffect(() => {
		if (authData) {
			User.doc(authData.uid).get()
				.then(snapshopt => {
					const uData = snapshopt.data()
					console.log(uData)
					if (uData) {
						const {
							firstName,
							lastName,
							email,
							phone,
							country
						} = uData

						setUserData({
							firstName,
							lastName,
							email,
							phone,
							country,
						})
					}
				})
				.catch(error => console.log(`Could not fetch user data`, error))
		} else {
			setUserData(undefined)
		}

		setAppState(prevState => ({
			...prevState,
			auth: {
				isLoggedIn: !!authData,
				data: userData
			}
		}))
	}, [authData])

	useEffect(() => {
		if (userDataForDb) {
			if (authData) {
				User.doc(authData.uid).set({
					...userDataForDb,
					createdAt: firebase.firestore.FieldValue.serverTimestamp()
				})
			}
		}
	}, [userDataForDb])

	const doSignup = async (userData: UserInterface, callback: () => void) => {
		console.log(userData)

		setUserDataForDb(userData)

		callback()
	}



	const doLogout = async (callback: () => void) => {
		await Auth.signOut()

		callback()
	}

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles: any = document.querySelector('#jss-server-side')

		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>{APP_NAME}</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			{/* <ThemeProvider> */}
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<AppContext.Provider value={{
				...appState, actions: {
					doSignup,
					doLogout,
				}
			}}>
				<Component {...pageProps} />
			</AppContext.Provider>
			{/* </ThemeProvider> */}
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}