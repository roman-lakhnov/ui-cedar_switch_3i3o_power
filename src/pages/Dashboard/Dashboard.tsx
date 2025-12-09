import ColorIcon from '@/components/ColorIcon/ColorIcon'
import Header from '@/components/Header/Header'
import InputComponent from '@/components/InputComponent/InputComponent'
import MainChart from '@/components/MainChart/MainChart'
import MonitoringComponent from '@/components/MonitoringComponent/MonitoringComponent'
import RelayComponent from '@/components/RelayComponent/RelayComponent'
import type {
	DigitalInputState,
	MonitoringParameter,
	RelayState
} from '@/types'
import { generateRandomData } from '@/utils/utils'
import { Wifi } from 'lucide-react'
import { useState } from 'react'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
	// const [mqttConnected, setMqttConnected] = useState(true)
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
	const [monitoringData] = useState<MonitoringParameter[]>([
		{
			id: 1,
			parameterName: 'Network voltage',
			parameterValues: generateRandomData(220, 12, 0.3),
			unit: 'V'
		},
		{
			id: 2,
			parameterName: 'Current',
			parameterValues: generateRandomData(2.3, 12, 0.3),
			unit: 'A'
		},
		{
			id: 3,
			parameterName: 'Power factor',
			parameterValues: generateRandomData(0.93, 12, 0.3),
			unit: ''
		},
		{
			id: 4,
			parameterName: 'Active power',
			parameterValues: generateRandomData(529.1, 12, 0.3),
			unit: 'W'
		},
		{
			id: 5,
			parameterName: 'Reactive power',
			parameterValues: generateRandomData(213.8, 12, 0.3),
			unit: 'VAR'
		},
		{
			id: 6,
			parameterName: 'Accumulated energy',
			parameterValues: generateRandomData(1247.6, 12, 0.3),
			unit: 'kWh'
		}
	])
	const [shownMonitoring, setShownMonitoring] =
		useState<MonitoringParameter | null>(null)

	const toggleRelay = (id: number) => {
		setRelays(prev =>
			prev.map(relay =>
				relay.id === id ? { ...relay, isActive: !relay.isActive } : relay
			)
		)
	}
	const toggleMonitoring = (id: number) => {
		setShownMonitoring(prev =>
			prev?.id === id
				? null
				: monitoringData.find(param => param.id === id) || null
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
				<section className={styles.monitoring}>
					<h2>Energy Monitoring</h2>
					<div className={styles.content}>
						{monitoringData.map(monitoringParameter => (
							<MonitoringComponent
								key={monitoringParameter.id}
								data={monitoringParameter}
								shownMonitoring={shownMonitoring}
								onToggle={toggleMonitoring}
							/>
						))}
					</div>
				</section>
				{shownMonitoring !== null && (
					<section className={`card ${styles.parameterDetails}`}>
						<div className={styles.heading}>
							<div className={styles.iconWrapper}>
								<ColorIcon dataName={shownMonitoring.parameterName} />
							</div>
							<h3>{shownMonitoring.parameterName} - Detailed chart</h3>
						</div>
						<MainChart data={shownMonitoring} />
					</section>
				)}
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
