import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
import { Lock, Shield, User } from 'lucide-react'

const Login = () => {
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
					<form className='card' action=''>
						<div className={styles.headingWrapper}>
							<div className={styles.dot}></div>
							<h2>Login credentials</h2>
						</div>
						<div className={styles.inputGroup}>
							<div className={styles.labelWrapper}>
								<User className={styles.userIcon} />
								<label htmlFor='username'>Username</label>
							</div>
							<input
								type='text'
								id='username'
								name='username'
								placeholder='Enter username'
							/>
						</div>
						<div className={styles.inputGroup}>
							<div className={styles.labelWrapper}>
								<Lock className={styles.lockIcon} />
								<label htmlFor='password'>Password</label>
							</div>
							<input
								type='password'
								id='password'
								name='password'
								placeholder='Enter password'
							/>
						</div>
						<button type='submit' className={styles.loginButton}>
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
