import Header from '@/components/Header/Header'
import styles from './DeviceLogs.module.scss'
import { useEffect, useState } from 'react'
import { CircleAlert, Info, Search, TriangleAlert } from 'lucide-react'

type log = {
	timestamp: string
	level: 'info' | 'warning' | 'error'
	source: string
	message: string
}

type filterType = 'all' | 'info' | 'warning' | 'error'

const DeviceLogs = () => {
	const [Logs] = useState<log[]>([
		{
			timestamp: '2024-10-01T12:00:00Z',
			level: 'info',
			source: 'System',
			message: '	System started'
		},
		{
			timestamp: '2024-10-01T12:05:00Z',
			level: 'info',
			source: 'MQTT',
			message: 'Connected to MQTT broker'
		},
		{
			timestamp: '2024-10-01T12:10:00Z',
			level: 'warning',
			source: 'Relay 2',
			message: 'Relay high temperature'
		},
		{
			timestamp: '2024-10-01T12:15:00Z',
			level: 'info',
			source: 'Digital Input 1',
			message: 'Input state changed'
		},
		{
			timestamp: '2024-10-01T12:20:00Z',
			level: 'error',
			source: 'Energy Monitoring',
			message: 'Voltage out of range'
		},
		{
			timestamp: '2024-10-01T12:25:00Z',
			level: 'info',
			source: 'Relay 1',
			message: 'Relay turned on'
		},
		{
			timestamp: '2024-10-01T12:30:00Z',
			level: 'warning',
			source: 'System',
			message: '	High memory usage'
		},
		{
			timestamp: '2024-10-01T12:35:00Z',
			level: 'info',
			source: 'Relay 3',
			message: 'Relay turned off'
		}
	])
	const [selectedFilter, setSelectedFilter] = useState<filterType>('all')
	// search will filter logs by message or source
	const [search, setSearch] = useState('')
	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value)
	}
	const [filteredLogs, setFilteredLogs] = useState<log[]>([])

	// Update filteredLogs whenever Logs, selectedFilter, or search changes
	useEffect(() => {
		const filtered = Logs.filter(log => {
			const matchesFilter =
				selectedFilter === 'all' ? true : log.level === selectedFilter
			const matchesSearch =
				log.message.toLowerCase().includes(search.toLowerCase()) ||
				log.source.toLowerCase().includes(search.toLowerCase())
			return matchesFilter && matchesSearch
		})
		setFilteredLogs(filtered)
	}, [Logs, selectedFilter, search])

	return (
		<div className='container'>
			<Header />
			<main className={styles.mainContent}>
				<section className={styles.logsCounters}>
					<div className='card'>
						<div className={styles.counterHeading}>
							<h3>Total Logs</h3>
						</div>
						<span className={styles.counterValue}>{Logs.length}</span>
					</div>
					<div className='card'>
						<div className={styles.counterHeading}>
							<Info className={styles.infoIcon} />
							<h3>Info</h3>
						</div>
						<span className={styles.counterValue}>
							{Logs.filter(log => log.level === 'info').length}
						</span>
					</div>
					<div className='card'>
						<div className={styles.counterHeading}>
							<TriangleAlert className={styles.warningIcon} />
							<h3>Warnings</h3>
						</div>
						<span className={styles.counterValue}>
							{Logs.filter(log => log.level === 'warning').length}
						</span>
					</div>
					<div className='card'>
						<div className={styles.counterHeading}>
							<CircleAlert className={styles.errorIcon} />
							<h3>Errors</h3>
						</div>
						<span className={styles.counterValue}>
							{Logs.filter(log => log.level === 'error').length}
						</span>
					</div>
				</section>
				<section className={`card ${styles.filters}`}>
					<h2>Filters</h2>
					<div className={styles.content}>
						<div className={styles.searchWrapper}>
							<input
								className={`input ${styles.searchInput}`}
								type='text'
								placeholder='Search logs...'
								value={search}
								onChange={handleSearchChange}
							/>
							<Search className={styles.searchIcon} />
						</div>
						<button
							onClick={() => setSelectedFilter('all')}
							className={`button ${styles.allButton} ${
								selectedFilter === 'all' ? styles.active : ''
							}`}
						>
							All
						</button>
						<button
							onClick={() => setSelectedFilter('info')}
							className={`button ${styles.infoButton} ${
								selectedFilter === 'info' ? styles.active : ''
							}`}
						>
							Info
						</button>
						<button
							onClick={() => setSelectedFilter('warning')}
							className={`button ${styles.warningButton} ${
								selectedFilter === 'warning' ? styles.active : ''
							}`}
						>
							Warnings
						</button>
						<button
							onClick={() => setSelectedFilter('error')}
							className={`button ${styles.errorButton} ${
								selectedFilter === 'error' ? styles.active : ''
							}`}
						>
							Errors
						</button>
					</div>
				</section>
				<section className={`card ${styles.logEntries}`}>
					<h2>Log Entries ({filteredLogs.length})</h2>
					{/* // filtered logs table  */}
					<table className={styles.logsTable}>
						<thead>
							<tr>
								<th className={styles.timestamp}>Timestamp</th>
								<th className={styles.level}>Level</th>
								<th className={styles.source}>Source</th>
								<th className={styles.message}>Message</th>
							</tr>
						</thead>
						<tbody>
							{filteredLogs.map((log, index) => (
								<tr key={log.timestamp + index} className={styles.logRow}>
									<td className={styles.timestamp}>
										{new Date(log.timestamp)
											.toISOString()
											.slice(0, 19)
											.replace('T', ' ')}
									</td>
									<td className={`${styles.level}`}>
										<span
											className={`status ${styles.levelStatus} ${
												styles[log.level]
											}`}
										>
											{log.level === 'info' && (
												<Info className={`${styles.levelIcon}`} />
											)}
											{log.level === 'warning' && (
												<TriangleAlert className={`${styles.levelIcon}`} />
											)}
											{log.level === 'error' && (
												<CircleAlert className={`${styles.levelIcon}`} />
											)}
											{log.level.charAt(0).toUpperCase() + log.level.slice(1)}
										</span>
									</td>
									<td className={styles.source}>{log.source}</td>
									<td className={styles.message}>{log.message}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</main>
		</div>
	)
}

export default DeviceLogs
