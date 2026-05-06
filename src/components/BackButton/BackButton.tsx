import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.scss'
import githubIcon from '@/assets/icons/github.svg'

type BackButtonProps = {
	pageName: string
}

const BackButton = ({ pageName }: BackButtonProps) => {
	return (
		<div className={styles.backButton}>
			{pageName == 'Dashboard' ? (
				<a
					href='https://github.com/kshypachov/cedar_switch_3i3o_power'
					target='_blank'
					rel='noopener noreferrer'
					className={`button ${styles.logo}`}
				>
					<img
						src={githubIcon}
						alt='gitLogo'
						className={styles.icon}
					/>
				</a>
			) : (
				<Link to='/' className={`button ${styles.backArrow}`}>
					<ArrowLeft className={styles.icon} />
				</Link>
			)}
		</div>
	)
}

export default BackButton
