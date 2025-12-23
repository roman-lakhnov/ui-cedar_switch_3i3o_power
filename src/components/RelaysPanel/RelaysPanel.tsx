import { useRelayState } from '@/hooks/relayState'
import { RelayComponent } from '../RelayComponent/RelayComponent'
import styles from './RelaysPanel.module.scss'

export const RelaysPanel = () => {
	const { data, isLoading, isError } = useRelayState()

	return (
		<section className={styles.relays}>
			<h2>Relay Control</h2>
			{(isLoading || isError) && (
				<div
					className={`status ${styles.relaysStatus} ${
						isLoading ? styles.loading : styles.failed
					}`}
				>
					{isLoading && 'Loading...'}
					{isError && `No response`}
				</div>
			)}
			{!isLoading && !isError && data && (
				<div className={styles.content}>
					{Object.keys(data).map(key => (
						<RelayComponent key={key} relayName={key} />
					))}
				</div>
			)}
		</section>
	)
}
