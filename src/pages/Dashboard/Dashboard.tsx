import Header from '@/components/Header/Header'
import RelayComponent from '@/components/RelayComponent/RelayComponent'
import InputComponent from '@/components/InputComponent/InputComponent'
import type { DigitalInputState, RelayState } from '@/types'
import { useState } from 'react'
import styles from './Dashboard.module.scss'
import { Wifi } from 'lucide-react'

const Dashboard = () => {
	const [mqttConnected, setMqttConnected] = useState(true)
	const [relays, setRelays] = useState<RelayState[]>([
		{ id: 1, name: `${'Relay'} 1`, isActive: false },
		{ id: 2, name: `${'Relay'} 2`, isActive: true },
		{ id: 3, name: `${'Relay'} 3`, isActive: false },
		{ id: 4, name: `${'Relay'} 4`, isActive: false }
	])
	const [digitalInputs] = useState<DigitalInputState[]>([
		{ id: 1, name: `${'Input'} 1`, isActive: true },
		{ id: 2, name: `${'Input'} 2`, isActive: false },
		{ id: 3, name: `${'Input'} 3`, isActive: true }
	])
	

	const toggleRelay = (id: number) => {
		setRelays(prev =>
			prev.map(relay =>
				relay.id === id ? { ...relay, isActive: !relay.isActive } : relay
			)
		)
	}

	return (
		<div className='container'>
			<Header />
			<main>
				<section className={styles.stats}>
					<div className={styles.content}>
						<div className='card'>
							<h3>
								<Wifi className={styles.wifiIcon} />
								MQTT Connection
							</h3>
							<div className={styles.mqttStatus}>Connected</div>
						</div>
						<div className='card'>
							<h3>Active relays</h3>
							<div className={styles.activeRelays}>
								{relays.filter(r => r.isActive).length}
							</div>
							<p className={styles.totalRelays}>of {relays.length} relays</p>
						</div>
						<div className='card'>
							<h3>System status</h3>
							<div className={styles.systemStatus}>Ready</div>
						</div>
					</div>
				</section>
				<section className={styles.relays}>
					<h2>Relay Control</h2>
					<div className={styles.content}>
						{relays.map(relay => (
							<RelayComponent
								key={relay.id}
								relay={relay}
								onToggle={toggleRelay}
							/>
						))}
					</div>
				</section>
				<section className={styles.inputs}>
					<h2>Digital Inputs</h2>
					<div className={styles.content}>
						{digitalInputs.map(input => (
							<InputComponent key={input.id} input={input} />
						))}
					</div>
				</section>
				{/* TODO implement energy monitoring data. start from type */}
				<section className={styles.monitoring}>
					<h2>Energy Monitoring</h2>
					<div className={styles.content}>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
						<div className='card'></div>
					</div>
				</section>
				<section className={`card ${styles.info}`}>
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
