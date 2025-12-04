import Header from '@/components/Header/Header'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='container'>
			<Header />
			<main>
				<Link to='/'>Skip login and go to Dashboard</Link>
			</main>
		</div>
	)
}

export default Login
