import Header from '@/components/Header/Header'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='page'>
			<Header />
			<Link to='/'>Skip login and go to Dashboard</Link>
		</div>
	)
}

export default Login
