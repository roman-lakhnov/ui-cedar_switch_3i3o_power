import Dashboard from '@/pages/Dashboard/Dashboard'
import Dev from '@/pages/Dev/Dev'
import DeviceLogs from '@/pages/DeviceLogs/DeviceLogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Settings from './pages/SettingsPage/Settings'
import ProtectedRoutes from './auth/ProtectedRoutes'
import { AuthProvider } from '@/auth/AuthProvider'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route element={<ProtectedRoutes />}>
						<Route path='/' element={<Dashboard />} />
						<Route path='/dev' element={<Dev />} />
						<Route path='/logs' element={<DeviceLogs />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
