import {
	ArrowLeft,
	Bug,
	Download,
	FileText,
	Github,
	Languages,
	LogOut,
	Settings,
	Shield,
	Trash2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	const description = {
		Dashboard: 'Embedded device control',
		Endpoints: 'API endpoint management',
		Logs: 'View device logs',
		Settings: 'Configure your preferences',
		Login: 'Sign in to your account'
	}
	// get current path
	const path = window.location.pathname
	const pageName =
		path === '/'
			? 'Dashboard'
			: path.slice(1).charAt(0).toUpperCase() +
			  path
					.slice(2)
					.replace(/\/.*/, '')
					.replace(/([A-Z])/g, ' $1')
					.trim()

	return (
		<header className={styles.header}>
			<div className={styles.row}>
				{pageName == 'Dashboard' && (
					<a
						href='https://github.com/kshypachov/cedar_switch_3i3o_power'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Github className={styles.logo} />
					</a>
				)}
				{pageName == 'Login' && (
					<a
						// href='https://github.com/kshypachov/cedar_switch_3i3o_power'
						// target='_blank'
						// rel='noopener noreferrer'
					>
						<Shield className={styles.logo} />
					</a>
				)}

				{pageName !== 'Dashboard' && pageName !== 'Login' && (
					<Link to='/'>
						<ArrowLeft className={styles.logo} />
					</Link>
				)}

				<div className={styles.col}>
					<h1>{pageName}</h1>
					<p>{description[pageName as keyof typeof description]}</p>
				</div>
			</div>
			<div className={styles.nav}>
				{pageName == 'Dashboard' && (
					<Link className={styles.link} to='/endpoints'>
						<Bug className={styles.icon} />
						Dev
					</Link>
				)}
				{pageName == 'Dashboard' && (
					<Link className={styles.link} to='/logs'>
						<FileText className={styles.icon} />
						Logs
					</Link>
				)}
				{pageName == 'Dashboard' && (
					<Link className={styles.link} to='/settings'>
						<Settings className={styles.icon} />
						Settings
					</Link>
				)}
				{pageName == 'Dashboard' && (
					<button className={styles.link}>
						<Languages className={styles.icon} />
						EN
					</button>
				)}
				{pageName == 'Logs' && (
					<button className={styles.link}>
						<Download className={styles.icon} />
						Export
					</button>
				)}
				{pageName == 'Logs' && (
					<button className={`${styles.link} ${styles.clear}`}>
						<Trash2 className={styles.icon} />
						Clear Logs
					</button>
				)}
				{pageName == 'Dashboard' && (
					<Link className={styles.link} to='/login'>
						<LogOut className={styles.icon} />
						Logout
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
