import ColorIcon from '@/components/ColorIcon/ColorIcon'
import BackgroundChart from '@/components/BackgroundChart/BackgroundChart'
import type { MonitoringParameter } from '@/types'
import { ChevronDown, ChevronUp } from 'lucide-react'
import styles from './MonitoringComponent.module.scss'

interface MonitoringComponentProps {
	data: MonitoringParameter
	shownMonitoring: MonitoringParameter | null
	onToggle: (id: number) => void
}

const MonitoringComponent = ({
	data,
	shownMonitoring,
	onToggle
}: MonitoringComponentProps) => {
	return (
		<button
			className={`card ${styles.monitoringCard} ${
				shownMonitoring?.id === data.id ? styles.active : styles.inactive
			}`}
			onClick={() => onToggle(data.id)}
		>
			<div className={styles.heading}>
				<div className={styles.iconWrapper}>
					<ColorIcon dataName={data.parameterName} />
				</div>
				<h3>{data.parameterName}</h3>
				{shownMonitoring?.id === data.id ? (
					<ChevronUp className={styles.chevron} />
				) : (
					<ChevronDown className={styles.chevron} />
				)}
			</div>
			<span className={styles.value}>
				{data.parameterValues.at(-1)} {data.unit}
			</span>
			<BackgroundChart data={data} />
		</button>
	)
}

export default MonitoringComponent
