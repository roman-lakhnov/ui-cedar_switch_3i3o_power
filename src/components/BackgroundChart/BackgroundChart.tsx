import type { MonitoringParameter } from '@/types'
import { dataRepresentation } from '@/utils/dataRepresentation'
import styles from './BackgroundChart.module.scss'

interface BackgroundChartProps {
	data: MonitoringParameter
}

const BackgroundChart = ({ data }: BackgroundChartProps) => {
	const [dataName, values] = [data.parameterName, data.parameterValues]
	const maxValue = Math.max(...values)
	const barWidth = 100 / values.length

	return (
		<svg
			className={styles.backgroundChart}
			viewBox='0 0 100 10'
			preserveAspectRatio='none'
		>
			{values.map((value, index) => {
				const x = index * barWidth
				const height = (value / maxValue) * 10 // Normalize to SVG height
				const y = 10 - height

				return (
					<rect
						key={dataName + index}
						x={x + barWidth * 0.1} // Center the bar within its segment
						y={y}
						width={barWidth * 0.8} // 80% of available width for spacing
						height={height}
						fill={`var(--color-${
							dataRepresentation[dataName as keyof typeof dataRepresentation]
								.color
						})`}
						fillOpacity='0.1'
					/>
				)
			})}
		</svg>
	)
}

export default BackgroundChart
