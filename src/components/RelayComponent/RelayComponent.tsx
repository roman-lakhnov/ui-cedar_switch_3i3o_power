import { memo } from 'react'
import { Power, Zap } from 'lucide-react'
import type { RelayState } from '@/types'
import styles from './RelayComponent.module.scss'
import ToggleButton from '../ToggleButton/ToggleButton'

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
					className={`status ${styles.toggleAction} ${
						relay.isActive ? styles.active : styles.inactive
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
				<ToggleButton
					state={relay.isActive}
					toggleAction={() => onToggle(relay.id)}
					buttonVariant='relay'
				/>
			</div>
		</div>
	)
})

RelayComponent.displayName = 'RelayComponent'

export default RelayComponent
