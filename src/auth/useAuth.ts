import { useContext } from 'react'
import { AuthContext, type AuthContextType } from './authContext'

export const useAuth = () => {
	return useContext(AuthContext) as AuthContextType
}
