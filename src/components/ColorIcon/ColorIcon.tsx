import { dataRepresentation } from '@/utils/dataRepresentation'
import styles from './ColorIcon.module.scss'
import type { JSX } from 'react'

interface ColorIconProps {
	dataName: string
}

const ColorIcon = ({ dataName }: ColorIconProps): JSX.Element => {
	const iconProps = {
		className: `${styles.icon}`,
		style: {
			color: `var(--color-${
				dataRepresentation[dataName as keyof typeof dataRepresentation].color
			})`
		}
	}
	return (
		<span {...iconProps}>
			{dataRepresentation[dataName as keyof typeof dataRepresentation].icon}
		</span>
	)
}

export default ColorIcon
