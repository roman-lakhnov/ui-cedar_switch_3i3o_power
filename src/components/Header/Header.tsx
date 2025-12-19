import { useAuth } from '@/auth/useAuth'
import {
	Bug,
	Download,
	FileText,
	Languages,
	LogOut,
	Menu,
	Settings,
	Trash2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BackButton from '../BackButton/BackButton'
import styles from './Header.module.scss'

const Header = () => {
	function toggleMenu() {
		const nav = document.querySelector(`.${styles.nav}`)
		const isDisplayed = getComputedStyle(nav!).display !== 'none'
		if (isDisplayed) {
			nav!.setAttribute('style', 'display: none;')
		} else {
			nav!.setAttribute('style', 'display: flex;')
		}
	}
	const pathDescriptions = [
		{
			path: '/',
			pageName: 'Dashboard',
			description: 'Embedded device control'
		},
		{
			path: '/dev',
			pageName: 'Dev',
			description: 'API endpoint management'
		},
		{
			path: '/logs',
			pageName: 'Device Logs',
			description: 'View device logs'
		},
		{
			path: '/settings',
			pageName: 'Settings',
			description: 'Configure your preferences'
		},
		{
			path: '*',
			pageName: 'Page Not Found',
			description: 'The page you are looking for does not exist'
		}
	]
	// get current path
	const path = globalThis.location.pathname
	const pageName =
		pathDescriptions.find(p => p.path === path)?.pageName ||
		pathDescriptions.find(p => p.path === '*')?.pageName
	const description =
		pathDescriptions.find(p => p.path === path)?.description ||
		pathDescriptions.find(p => p.path === '*')?.description

	const { signOut } = useAuth()

	return (
		<header className={styles.header}>
			<BackButton pageName={pageName!} />
			<div className={styles.pageDescription}>
				<h1>{pageName}</h1>
				<p>{description}</p>
			</div>
			<div className={`${styles.nav}`}>
				{pageName == 'Dashboard' && (
					<>
						<Link className={`button ${styles.link}`} to='/dev'>
							<Bug className={styles.icon} />
							Dev
						</Link>
						<button className={`button ${styles.link}`}>
							<Languages className={styles.icon} />
							EN
						</button>
						<Link className={`button ${styles.link}`} to='/logs'>
							<FileText className={styles.icon} />
							Device Logs
						</Link>
						<Link className={`button ${styles.link}`} to='/settings'>
							<Settings className={styles.icon} />
							Settings
						</Link>
						<button className={`button ${styles.link}`} onClick={signOut}>
							<LogOut className={styles.icon} />
							Logout
						</button>
					</>
				)}
				{pageName == 'Device Logs' && (
					<>
						<button className={`button ${styles.link}`}>
							<Download className={styles.icon} />
							Export
						</button>
						<button className={`button ${styles.link} ${styles.clear}`}>
							<Trash2 className={styles.icon} />
							Clear Logs
						</button>
					</>
				)}
			</div>
			{(pageName == 'Device Logs' || pageName == 'Dashboard') && (
				<button
					className={`button ${styles.burgerMenuButton}`}
					onClick={toggleMenu}
				>
					<Menu className={styles.icon} />
				</button>
			)}
		</header>
	)
}

export default Header
