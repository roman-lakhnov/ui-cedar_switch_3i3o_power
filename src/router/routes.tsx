import Dashboard from '@/pages/Dashboard/Dashboard'
import Dev from '@/pages/Dev/Dev'
import Logs from '@/pages/LogsPage/Logs'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Settings from '../pages/SettingsPage/Settings'

export const routes = [
	{ path: '/', element: <Dashboard /> },
	{ path: '/dev', element: <Dev /> },
	{ path: '/logs', element: <Logs /> },
	{ path: '/settings', element: <Settings /> },
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <NotFound /> }
]
