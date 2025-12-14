import Header from '@/components/Header/Header'
import styles from './Settings.module.scss'
import { Power } from 'lucide-react'
import { useState } from 'react'

const Settings = () => {
	const [toggles, setToggles] = useState({
		'Enable MQTT': false,
		'Enable TLS': false,
		'Server Certificate Validation': false,
		'Enable Safety Relay': false,
		'Relay 1': false,
		'Relay 2': false,
		'Relay 3': false,
		'Relay 4': false,
		'Enable Overload Protection': false,
		'Disconnect All Relays': false
	})
	return (
		<div className='container'>
			<Header />
			<main className={styles.mainContent}>
				<section className={`card ${styles.mqttSettings}`}>
					<div className={styles.headingWrapper}>
						<div className={styles.dot}></div>
						<h2>MQTT Settings</h2>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableMqtt'>Enable MQTT</label>
						<button
							className={`toggleButton ${
								toggles['Enable MQTT']
									? `active ${styles.active}`
									: `inactive ${styles.inactive}`
							} ${styles.toggleButton} `}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Enable MQTT': !prev['Enable MQTT']
								}))
							}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='hostname'>Hostname</label>
						<input
							placeholder='hostname'
							className='input'
							type='text'
							id='hostname'
						></input>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='port'>Port</label>
						<input
							placeholder='port'
							className='input'
							type='number'
							id='port'
						></input>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='username'>Username</label>
						<input
							placeholder='username'
							className='input'
							type='text'
							id='username'
						></input>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password'>Password</label>
						<input
							placeholder='password'
							className='input'
							type='password'
							id='password'
						></input>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableTls'>Enable TLS</label>
						<button
							id='enableTls'
							className={`toggleButton ${
								toggles['Enable TLS'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Enable TLS': !prev['Enable TLS']
								}))
							}
							aria-pressed={toggles['Enable TLS']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableServerCertValidation'>
							Server Certificate Validation
						</label>
						<button
							id='enableServerCertValidation'
							className={`toggleButton ${
								toggles['Server Certificate Validation'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Server Certificate Validation':
										!prev['Server Certificate Validation']
								}))
							}
							aria-pressed={toggles['Server Certificate Validation']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<button className={`button ${styles.saveMqttButton}`}>
						Save MQTT Settings
					</button>
				</section>
				<section className={`card ${styles.safetyStates}`}>
					<div className={styles.headingWrapper}>
						<div className={styles.dot}></div>
						<h2>Safety Relay States</h2>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableSafetyRelay'>Enable Function</label>
						<button
							id='enableSafetyRelay'
							className={`toggleButton ${
								toggles['Enable Safety Relay'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Enable Safety Relay': !prev['Enable Safety Relay']
								}))
							}
							aria-pressed={toggles['Enable Safety Relay']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<h3>Default Relay States:</h3>
					<div className={styles.controlGroup}>
						<label htmlFor='relay1'>Relay 1</label>
						<button
							id='relay1'
							className={`toggleButton ${
								toggles['Relay 1'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({ ...prev, 'Relay 1': !prev['Relay 1'] }))
							}
							aria-pressed={toggles['Relay 1']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='relay2'>Relay 2</label>
						<button
							id='relay2'
							className={`toggleButton ${
								toggles['Relay 2'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({ ...prev, 'Relay 2': !prev['Relay 2'] }))
							}
							aria-pressed={toggles['Relay 2']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='relay3'>Relay 3</label>
						<button
							id='relay3'
							className={`toggleButton ${
								toggles['Relay 3'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({ ...prev, 'Relay 3': !prev['Relay 3'] }))
							}
							aria-pressed={toggles['Relay 3']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='relay4'>Relay 4</label>
						<button
							id='relay4'
							className={`toggleButton ${
								toggles['Relay 4'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({ ...prev, 'Relay 4': !prev['Relay 4'] }))
							}
							aria-pressed={toggles['Relay 4']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<button className={`button ${styles.saveSafetyButton}`}>
						Save Safety Relay States
					</button>
				</section>
				<section className={`card ${styles.overloadProtection}`}>
					<div className={styles.headingWrapper}>
						<div className={styles.dot}></div>
						<h2>Overload Protection</h2>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableOverloadProtection'>
							Enable overload protection
						</label>
						<button
							id='enableOverloadProtection'
							className={`toggleButton ${
								toggles['Enable Overload Protection'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Enable Overload Protection':
										!prev['Enable Overload Protection']
								}))
							}
							aria-pressed={toggles['Enable Overload Protection']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='powerThreshold'>Power threshold (W)</label>
						<input
							placeholder='3000'
							className='input'
							type='text'
							id='powerThreshold'
						></input>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='disconnectAllRelays'>Disconnect all relays</label>
						<button
							id='disconnectAllRelays'
							className={`toggleButton ${
								toggles['Disconnect All Relays'] ? 'active' : 'inactive'
							}`}
							onClick={() =>
								setToggles(prev => ({
									...prev,
									'Disconnect All Relays': !prev['Disconnect All Relays']
								}))
							}
							aria-pressed={toggles['Disconnect All Relays']}
						>
							<div className='slider'></div>
						</button>
					</div>
					<button className={`button ${styles.saveProtectionButton}`}>
						Save Protection Settings
					</button>
				</section>
				<section className={`card ${styles.systemActions}`}>
					<div className={styles.headingWrapper}>
						<div className={styles.dot}></div>
						<h2>System Actions</h2>
					</div>
					<div className={styles.inputGroup}>
						<h3>Device Reboot</h3>
						<p>Perform a full reboot of the embedded device</p>
					</div>
					<button className={`button ${styles.rebootButton}`}>
						<Power className={styles.rebootIcon} />
						Reboot Device
					</button>
				</section>
			</main>
		</div>
	)
}

export default Settings
