import { memo } from 'react'
import { Power, Zap } from 'lucide-react'
import type { RelayState } from '@/types'
import styles from './RelayComponent.module.scss'

interface RelayComponentProps {
	relay: RelayState
	onToggle: (id: number) => void
}

const RelayComponent = memo(({ relay, onToggle }: RelayComponentProps) => {
	return (
		<div
			className={`card ${styles.relay} ${relay.isActive ? styles.active : ''}`}
		>
			<div className={styles.heading}>
				{relay.isActive ? (
					<Zap className={`${styles.powerIcon} ${styles.active}`} />
				) : (
					<Power className={styles.powerIcon} />
				)}
				<h3>{relay.name}</h3>
				<div
					className={`${styles.toggleAction} ${
						relay.isActive ? styles.active : ''
					}`}
				>
					{relay.isActive ? 'ON' : 'OFF'}
				</div>
			</div>
			<div className={styles.control}>
				<div
					className={`${styles.dot} ${relay.isActive ? styles.active : ''}`}
				></div>
				<p className={styles.status}>
					Status: {relay.isActive ? 'Active' : 'Inactive'}
				</p>
				<button
					className={`${styles.toggleButton} ${
						relay.isActive ? styles.active : ''
					}`}
					onClick={() => onToggle(relay.id)}
				>
					<div className={styles.slider}></div>
				</button>
			</div>
		</div>
	)
})

RelayComponent.displayName = 'RelayComponent'

export default RelayComponent
