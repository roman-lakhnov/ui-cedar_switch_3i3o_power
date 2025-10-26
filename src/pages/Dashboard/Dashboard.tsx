import Header from '@/components/Header/Header'
import { useState } from 'react'
import styles from './Dashboard.module.scss'
import type { DigitalInputState, RelayState } from '@/types'

const Dashboard = () => {
	const [mqttConnected, setMqttConnected] = useState(true)
	const [relays, setRelays] = useState<RelayState[]>([
		{ id: 1, name: `${'relay'} 1`, isActive: false },
		{ id: 2, name: `${'relay'} 2`, isActive: true },
		{ id: 3, name: `${'relay'} 3`, isActive: false },
		{ id: 4, name: `${'relay'} 4`, isActive: false }
	])

	const [digitalInputs] = useState<DigitalInputState[]>([
		{ id: 1, name: `${'digital_input'} 1`, isActive: true },
		{ id: 2, name: `${'digital_input'} 2`, isActive: false },
		{ id: 3, name: `${'digital_input'} 3`, isActive: true }
	])

	return (
		<div className='page'>
			<Header />
			<main className={styles.main}>
				<section className={styles.stats}>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
				</section>
				<section className={styles.relay}>
					<h2>Relay Control</h2>
					<div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
					</div>
				</section>
				<section className={styles.inputs}>
					<h2>Digital Inputs</h2>
					<div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
					</div>
				</section>
				<section className={styles.monitoring}>
					<h2>Energy Monitoring</h2>
					<div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
						<div className={styles.card}></div>
					</div>
				</section>
				<section className={styles.info}>
					<h2>Device Info</h2>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</section>
			</main>
		</div>
	)
}

export default Dashboard
