import ColorIcon from '@/components/ColorIcon/ColorIcon'
import Header from '@/components/Header/Header'
import InputComponent from '@/components/InputComponent/InputComponent'
import MainChart from '@/components/MainChart/MainChart'
import MonitoringComponent from '@/components/MonitoringComponent/MonitoringComponent'
import { RelaysPanel } from '@/components/RelaysPanel/RelaysPanel'
import type { DigitalInputState, MonitoringParameter } from '@/types'
import { generateRandomData, secondsToDhms } from '@/utils/utils'
import { Wifi } from 'lucide-react'
import { useState } from 'react'
import styles from './Dashboard.module.scss'
import { useRelayState } from '@/hooks/relay'

const Dashboard = () => {
	const { data, isLoading, isError, error } = useRelayState()

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

	const deviceInfo: Record<string, string> = {
		'Firmware version': 'v1.2.3',
		Uptime: '225121',
		'IP address': '192.168.1.100',
		'MAC address': 'AA:BB:CC:DD:EE:FF'
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
			<main className={styles.dashboard}>
				<section className={styles.stats}>
					<div className={styles.content}>
						<div className='card'>
							<h3>
								<Wifi className={styles.wifiIcon} />
								MQTT Connection
							</h3>
							<div className='status'>Connected</div>
						</div>
						<div className='card'>
							<h3>System status</h3>
							<div className='status'>Ready</div>
						</div>
						<div className='card'>
							<h3>Active relays</h3>
							<div className={styles.activeRelays}>
								{data ? Object.values(data).filter(state => state).length : 0}
							</div>
							<p className={styles.totalRelays}>
								of {data ? Object.keys(data).length : 0} relays
							</p>
						</div>
					</div>
				</section>
				<RelaysPanel />
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
					<h2>Device Information</h2>
					<ul className={styles.deviceInfoList}>
						{Object.entries(deviceInfo).map(([key, value]) => (
							<li key={key} className={styles.deviceInfoItem}>
								<span className={styles.deviceInfoKey}>{key}</span>
								<span className={styles.deviceInfoValue}>
									{key == 'Uptime' ? secondsToDhms(Number(value)) : value}
								</span>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}

export default Dashboard
