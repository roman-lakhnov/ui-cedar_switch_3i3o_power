import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './useAuth'

const ProtectedRoutes = () => {
	const auth = useAuth()
	const user = auth?.user
	return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default ProtectedRoutes
