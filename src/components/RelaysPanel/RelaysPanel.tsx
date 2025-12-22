import { useRelayState } from '@/hooks/relay'
import { RelayComponent } from '../RelayComponent/RelayComponent'
import styles from './RelaysPanel.module.scss'

export const RelaysPanel = () => {
	const { data, isLoading, isError, error } = useRelayState()

	return (
		<section className={styles.relays}>
			<h2>Relay Control</h2>
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error: {error.message}</div>}
			{data && (
				<div className={styles.content}>
					{Object.keys(data).map(key => (
						<RelayComponent key={key} relayName={key} />
					))}
				</div>
			)}
		</section>
	)
}
