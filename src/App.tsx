import { AuthProvider } from '@/auth/AuthProvider'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Dev from '@/pages/Dev/Dev'
import DeviceLogs from '@/pages/DeviceLogs/DeviceLogs'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './auth/ProtectedRoutes'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Settings from './pages/SettingsPage/Settings'

function App() {
	return (
		<AuthProvider>
			<Routes>
				{/* <Route path='/login' element={<Login />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/dev' element={<Dev />} />
					<Route path='/logs' element={<DeviceLogs />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='*' element={<NotFound />} />
				</Route> */}

				<Route path='/' element={<Dashboard />} />
				<Route path='/dev' element={<Dev />} />
				<Route path='/logs' element={<DeviceLogs />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</AuthProvider>
	)
}

export default App
