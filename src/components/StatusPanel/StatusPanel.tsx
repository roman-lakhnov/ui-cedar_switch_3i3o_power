import { useMqttSettings } from '@/hooks/mqttSettings'
import { useRelayState } from '@/hooks/relayState'
import { useSystemRebootRequired } from '@/hooks/systemReboot'
import { Joystick, Settings, Wifi } from 'lucide-react'
import styles from './StatusPanel.module.scss'

export const StatusPanel = () => {
	const {
		data: relayData,
		isLoading: relayIsLoading,
		isError: relayIsError
	} = useRelayState()
	const {
		data: mqttSettingsData,
		isLoading: mqttSettingsIsLoading,
		isError: mqttSettingsIsError
	} = useMqttSettings()
	const {
		data: systemRebootRequiredData,
		isLoading: systemRebootRequiredIsLoading,
		isError: systemRebootRequiredIsError
	} = useSystemRebootRequired()

	return (
		<section className={styles.statusPanel}>
			<div className='card'>
				<h3>
					<Settings
						className={`${styles.systemIcon}
							 ${systemRebootRequiredIsLoading && styles.loading}
							${systemRebootRequiredIsError && styles.failed}	
							${systemRebootRequiredData?.reboot_required && styles.rebootRequired}	
							`}
					/>
					System status
				</h3>
				<div
					className={`status ${styles.systemStatus} 
					${relayIsLoading && styles.loading} 
					${relayIsError && styles.failed}
					${systemRebootRequiredData?.reboot_required && styles.rebootRequired}	
					`}
				>
					{relayIsLoading && 'Loading...'}
					{relayIsError && 'No response'}
					{!relayIsLoading &&
						!relayIsError &&
						!systemRebootRequiredData?.reboot_required &&
						'Ready'}
					{!relayIsLoading &&
						!relayIsError &&
						systemRebootRequiredData?.reboot_required &&
						'Reboot required'}
				</div>
			</div>
			<div className='card'>
				<h3>
					<Wifi
						className={`${styles.wifiIcon} ${
							mqttSettingsIsLoading ? styles.loading : ''
						} ${mqttSettingsIsError ? styles.failed : ''} ${
							mqttSettingsData && !mqttSettingsData?.enabled
								? styles.disabled
								: ''
						}
					`}
					/>
					MQTT Connection
				</h3>
				<div
					className={`status ${styles.mqttStatus} ${
						mqttSettingsIsLoading ? styles.loading : ''
					} ${mqttSettingsIsError ? styles.failed : ''}
					 ${mqttSettingsData && !mqttSettingsData?.enabled ? styles.disabled : ''}
					`}
				>
					{mqttSettingsIsLoading ? 'Loading...' : ''}
					{mqttSettingsIsError ? 'No response' : ''}
					{!mqttSettingsIsLoading &&
					!mqttSettingsIsError &&
					mqttSettingsData?.enabled
						? 'Enabled'
						: ''}
					{!mqttSettingsIsLoading &&
					!mqttSettingsIsError &&
					!mqttSettingsData?.enabled
						? 'Disabled'
						: ''}
				</div>
			</div>
			<div className='card'>
				<h3>
					<Joystick
						className={`${styles.joystickIcon}
				 ${relayIsLoading ? styles.loading : ''}
							${relayIsError ? styles.failed : ''}	`}
					/>
					Active relays
				</h3>
				{relayIsLoading || relayIsError ? (
					<div
						className={`status ${styles.activeRelaysStatus} ${
							relayIsLoading ? styles.loading : ''
						} ${relayIsError ? styles.failed : ''}`}
					>
						{relayIsLoading ? 'Loading...' : ''}
						{relayIsError ? 'No response' : ''}
					</div>
				) : (
					<p className={styles.activeRelays}>
						{relayData
							? Object.values(relayData).filter(state => state).length
							: 0}
						<span className={styles.totalRelays}>
							of {relayData ? Object.keys(relayData).length : 0} relays
						</span>
					</p>
				)}
			</div>
		</section>
	)
}
