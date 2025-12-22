import { usePostRelayState, useRelayState } from '@/hooks/relay'
import { Power, Zap } from 'lucide-react'
import ToggleButton from '../ToggleButton/ToggleButton'
import styles from './RelayComponent.module.scss'
import { formatRelayName } from '@/utils/utils'

type RelayComponentProps = {
	relayName: string
}

export const RelayComponent = ({ relayName }: RelayComponentProps) => {
	const { data } = useRelayState()
	const { postNewState, isPending } = usePostRelayState()

	const relayState = data?.[relayName] ?? false

	// TODO fix browser console warning [Violation] 'message' handler took 158ms
	const handleToggle = () => {
		if (!data || isPending) return
		const newData = { ...data}
		newData[relayName] = !relayState
		postNewState(newData)
	}

	return (
		<div
			className={`card ${styles.relay} ${relayState ? styles.active : ''} ${
				isPending ? styles.loading : ''
			}`}
		>
			<div className={styles.heading}>
				{relayState ? (
					<Zap className={`${styles.powerIcon} ${styles.active}`} />
				) : (
					<Power className={styles.powerIcon} />
				)}
				<h3>{formatRelayName(relayName)}</h3>
				<div
					className={`status ${styles.toggleAction} ${
						relayState ? styles.active : styles.inactive
					}`}
				>
					{relayState ? 'ON' : 'OFF'}
				</div>
			</div>
			<div className={styles.control}>
				<div
					className={`${styles.dot} ${relayState ? styles.active : ''}`}
				></div>
				<p className={styles.status}>
					Status: {relayState ? 'Active' : 'Inactive'}
				</p>
				<ToggleButton
					state={relayState}
					toggleAction={handleToggle}
					buttonVariant='relay'
					disabled={isPending}
				/>
			</div>
		</div>
	)
}
