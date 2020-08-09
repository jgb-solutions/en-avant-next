import React from "react"

export interface UserInterface {
	firstName: string
	lastName: string
	email: string
	phone: string
	country: string
}

export interface AuthInterface {
	isLoggedIn: boolean
	data?: UserInterface
	token?: string
}

export interface AppProvider {
	auth: AuthInterface
}

export const AppProviderData: AppProvider = {
	auth: {
		isLoggedIn: false,
	},
}

export const AppContext = React.createContext(AppProviderData)
