import styles from './CustomInput.module.scss'

interface CustomInputProps {
	type: 'text' | 'password' | 'email' | 'number'
	id: string
	name: string
	placeholder: string
	inputVariant: 'login' | 'settings'
}

const CustomInput = ({
	type,
	id,
	name,
	placeholder,
	inputVariant
}: CustomInputProps) => {
	return (
		<input
			className={`${styles.customInput} ${styles[inputVariant]}`}
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
		/>
	)
}

export default CustomInput
