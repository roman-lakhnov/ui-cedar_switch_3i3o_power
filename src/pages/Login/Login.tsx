import { useAuth } from '@/auth/useAuth'
import CustomInput from '@/components/CustomInput/CustomInput'
import { Lock, Shield, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'

const Login = () => {
	const { signIn } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const fd = new FormData(form)
		const username = fd.get('username') as string
		const password = fd.get('password') as string
		try {
			await signIn(username, password)
			navigate('/', { replace: true })
		} catch (err) {
			// in a real app show an error
			console.error('signin failed', err)
		}
	}

	return (
		<div className={`container ${styles.loginPage}`}>
			<div className={styles.loginCards}>
				<header className='card'>
					<div className={styles.shieldIcon}>
						<Shield />
					</div>
					<h1>Authorization</h1>
					<p>Login to embedded device control panel</p>
				</header>
				<main>
					<form className='card' onSubmit={handleSubmit}>
						<div className={styles.headingWrapper}>
							<div className={styles.dot}></div>
							<h2>Login credentials</h2>
						</div>
						<div className={styles.inputGroup}>
							<div className={styles.labelWrapper}>
								<User className={styles.userIcon} />
								<label htmlFor='username'>Username</label>
							</div>
							<CustomInput
								type='text'
								id='username'
								name='username'
								placeholder='Enter username'
								inputVariant='login'
								required={true}
							/>
						</div>
						<div className={styles.inputGroup}>
							<div className={styles.labelWrapper}>
								<Lock className={styles.lockIcon} />
								<label htmlFor='password'>Password</label>
							</div>
							<CustomInput
								type='password'
								id='password'
								name='password'
								placeholder='Enter password'
								inputVariant='login'
								required={true}
							/>
						</div>
						<button type='submit' className={`button ${styles.loginButton}`}>
							Log in
						</button>
					</form>
				</main>
				<footer className='card'>
					<div className={styles.status}>
						<div className={styles.statusIndicator}></div>
						<p>Device ready for authorization</p>
					</div>
					<Link className={styles.backToHome} to='/'>
						Back to home
					</Link>
				</footer>
			</div>
		</div>
	)
}

export default Login
