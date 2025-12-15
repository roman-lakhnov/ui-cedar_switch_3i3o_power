import { createContext } from 'react'

export type User = {
	username: string
}

export interface AuthContextType {
	user: User | null
	signIn: (username: string, password: string) => Promise<void>
	signOut: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)
