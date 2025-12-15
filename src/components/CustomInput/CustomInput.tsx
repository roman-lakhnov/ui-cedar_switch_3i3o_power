import styles from './CustomInput.module.scss'

interface CustomInputProps {
	type: 'text' | 'password' | 'email' | 'number'
	id: string
	name: string
	placeholder: string
	inputVariant: 'login' | 'settings'
	required?: boolean
}

const CustomInput = ({
	type,
	id,
	name,
	placeholder,
	inputVariant,
	required = false
}: CustomInputProps) => {
	let autoCompleteValue
	if (name === 'username') {
		autoCompleteValue = 'username'
	} else if (name === 'password') {
		autoCompleteValue = 'current-password'
	} else {
		autoCompleteValue = 'off'
	}

	return (
		<input
			className={`${styles.customInput} ${styles[inputVariant]}`}
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			required={required}
			autoComplete={autoCompleteValue}
		/>
	)
}

export default CustomInput
