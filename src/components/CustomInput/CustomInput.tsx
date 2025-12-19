import styles from './CustomInput.module.scss'

interface CustomInputProps {
	type: 'text' | 'password' | 'email' | 'number'
	id: string
	name: string
	inputVariant?: 'login' | 'settings'
	placeholder?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	value?: string | number
}

const CustomInput = ({
	type,
	id,
	name,
	placeholder,
	onChange,
	inputVariant = 'settings',
	required = false,
	value
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
			value={value}
			onChange={onChange}
		/>
	)
}

export default CustomInput
