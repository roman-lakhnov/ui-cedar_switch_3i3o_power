import { memo } from 'react'
import { SignalHigh, SignalLow } from 'lucide-react'
import type { DigitalInputState } from '@/types'
import styles from './InputComponent.module.scss'

interface InputComponentProps {
	input: DigitalInputState
}

const InputComponent = memo(({ input }: InputComponentProps) => {
	return (
		<div
			className={`card ${styles.input} ${input.isActive ? styles.active : ''}`}
		>
			<div className={styles.heading}>
				{input.isActive ? (
					<div className={`${styles.signalIconWrapper} ${styles.active}`}>
						<SignalHigh className={`${styles.signalIcon} ${styles.active}`} />
					</div>
				) : (
					<div className={styles.signalIconWrapper}>
						<SignalLow className={styles.signalIcon} />
					</div>
				)}
				<h3>{input.name}</h3>
				<div
					className={`${styles.inputStatus} ${
						input.isActive ? styles.active : ''
					}`}
				>
					{input.isActive ? 'Active' : 'Inactive'}
				</div>
			</div>
			<div className={styles.control}>
				<div
					className={`${styles.dot} ${input.isActive ? styles.active : ''}`}
				></div>
				<p className={styles.inputInfo}>
					System status: {input.isActive ? 'Active' : 'Inactive'}
				</p>
			</div>
		</div>
	)
})

InputComponent.displayName = 'InputComponent'

export default InputComponent
