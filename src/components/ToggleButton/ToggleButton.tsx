import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
	state: boolean
	toggleAction: () => void
	buttonVariant: 'relay' | 'settings'
}

const ToggleButton = ({
	state,
	toggleAction,
	buttonVariant
}: ToggleButtonProps) => {
	return (
		<button
			className={`${styles.toggleButton} ${
				state ? styles.active : styles.inactive
			} ${styles[buttonVariant + 'Variant']}`}
			onClick={toggleAction}
		>
			<div className={styles.slider}></div>
		</button>
	)
}

export default ToggleButton
