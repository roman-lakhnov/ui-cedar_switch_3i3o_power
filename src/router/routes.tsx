import Home from '@/pages/Home/Home'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Settings from '../pages/SettingsPage/Settings'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Logs from '@/pages/LogsPage/Logs'

export const routes = [
	{ path: '/', element: <Dashboard /> },
	{ path: '/endpoints', element: <Home /> },
	{ path: '/settings', element: <Settings /> },
	{ path: '/logs', element: <Logs /> },
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <NotFound /> }
]
