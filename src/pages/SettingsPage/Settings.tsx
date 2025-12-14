import Header from '@/components/Header/Header'
import styles from './Settings.module.scss'
import { Power } from 'lucide-react'
import { useState } from 'react'
import ToggleButton from '@/components/ToggleButton/ToggleButton'
import CustomInput from '@/components/CustomInput/CustomInput'

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
						<ToggleButton
							state={toggles['Enable MQTT']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Enable MQTT': !prev['Enable MQTT']
								}))
							}
							buttonVariant='settings'
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='hostname'>Hostname</label>
						<CustomInput
							type='text'
							id='hostname'
							name='hostname'
							placeholder='hostname'
							inputVariant='settings'
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='port'>Port</label>
						<CustomInput
							type='number'
							id='port'
							name='port'
							placeholder='port'
							inputVariant='settings'
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='username'>Username</label>
						<CustomInput
							type='text'
							id='username'
							name='username'
							placeholder='username'
							inputVariant='settings'
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='password'>Password</label>
						<CustomInput
							type='password'
							id='password'
							name='password'
							placeholder='password'
							inputVariant='settings'
						/>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableTls'>Enable TLS</label>
						<ToggleButton
							state={toggles['Enable TLS']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Enable TLS': !prev['Enable TLS']
								}))
							}
							buttonVariant='settings'
						/>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='enableServerCertValidation'>
							Server Certificate Validation
						</label>
						<ToggleButton
							state={toggles['Server Certificate Validation']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Server Certificate Validation':
										!prev['Server Certificate Validation']
								}))
							}
							buttonVariant='settings'
						/>
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
						<ToggleButton
							state={toggles['Enable Safety Relay']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Enable Safety Relay': !prev['Enable Safety Relay']
								}))
							}
							buttonVariant='settings'
						/>
					</div>
					<h3>Default Relay States:</h3>
					{Object.entries(toggles).map(([key, value]) => {
						if (key.startsWith('Relay')) {
							return (
								<div className={styles.controlGroup} key={key}>
									<label htmlFor={key}>{key}</label>
									<ToggleButton
										state={value}
										toggleAction={() =>
											setToggles(prev => ({
												...prev,
												[key]: !prev[key as keyof typeof toggles]
											}))
										}
										buttonVariant='settings'
									/>
								</div>
							)
						}
						return null
					})}
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
						<ToggleButton
							state={toggles['Enable Overload Protection']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Enable Overload Protection':
										!prev['Enable Overload Protection']
								}))
							}
							buttonVariant='settings'
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor='powerThreshold'>Power threshold (W)</label>
						<CustomInput
							type='number'
							id='powerThreshold'
							name='powerThreshold'
							placeholder='3000'
							inputVariant='settings'
						/>
					</div>
					<div className={styles.controlGroup}>
						<label htmlFor='disconnectAllRelays'>Disconnect all relays</label>
						<ToggleButton
							state={toggles['Disconnect All Relays']}
							toggleAction={() =>
								setToggles(prev => ({
									...prev,
									'Disconnect All Relays': !prev['Disconnect All Relays']
								}))
							}
							buttonVariant='settings'
						/>
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
