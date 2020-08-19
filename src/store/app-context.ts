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
	auth?: AuthInterface | null
	actions?: any
}

export const AppProviderData: AppProvider = {
	auth: null,
	actions: null,
}

export const AppContext = React.createContext(AppProviderData)
