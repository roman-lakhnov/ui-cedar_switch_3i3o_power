import type { MonitoringParameter } from '@/types'
import { dataRepresentation } from '@/utils/dataRepresentation'
import styles from './MainChart.module.scss'

interface MainChartProps {
	data: MonitoringParameter
}

const MainChart = ({ data }: MainChartProps) => {
	const [dataName, values] = [data.parameterName, data.parameterValues]
	const maxValue = Math.max(...values)
	const barWidth = 100 / values.length

	return (
		<svg
			className={styles.mainChart}
			viewBox='0 0 100 20'
			preserveAspectRatio='none'
		>
			{values.map((value, index) => {
				const x = index * barWidth
				const height = (value / maxValue) * 20 // Normalize to SVG height
				const y = 20 - height

				return (
					<g key={dataName + index}>
						<rect
							x={x + barWidth * 0.1} // Center the bar within its segment
							y={y}
							width={barWidth * 0.8} // 80% of available width for spacing
							height={height - 1.5}
							fill={`var(--color-${
								dataRepresentation[dataName as keyof typeof dataRepresentation]
									.color
							})`}
							fillOpacity='1'
						/>
						<text
							x={x + (barWidth * 0.8) / 2 + barWidth * 0.1}
							y={19.5}
							textAnchor='middle'
							fontSize='1'
							fill='currentColor'
							className={styles.barValue}
						>
							{value} {data.unit}
						</text>
					</g>
				)
			})}
		</svg>
	)
}

export default MainChart
