import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
	state: boolean
	toggleAction: () => void
	buttonVariant: 'relay' | 'settings'
	disabled?: boolean
}

const ToggleButton = ({
	state,
	toggleAction,
	buttonVariant,
	disabled = false,
}: ToggleButtonProps) => {
	return (
		<button
			className={`${styles.toggleButton} ${
				state ? styles.active : styles.inactive
			} ${styles[buttonVariant + 'Variant']}`}
			onClick={toggleAction}
			disabled={disabled}
		>
			<div className={styles.slider}></div>
		</button>
	)
}

export default ToggleButton
