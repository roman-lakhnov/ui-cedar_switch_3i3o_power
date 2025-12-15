import { useMemo, useState } from 'react'
import { AuthContext, type User } from './authContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	const signIn = async (username: string, password: string): Promise<void> => {
		// TODO: Implement authentication logic
		console.log(password) // to avoid unused variable warning
		setUser({ username })
	}

	const signOut = () => {
		setUser(null)
	}

	const value = useMemo(() => ({ user, signIn, signOut }), [user])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
