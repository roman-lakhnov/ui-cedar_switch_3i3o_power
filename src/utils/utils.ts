import type { DataType, UserType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { endpoints } from './endpoints'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function getData(
	setData: React.Dispatch<React.SetStateAction<DataType>>
) {
	Object.values(endpoints).forEach(async endpoint => {
		try {
			if (!endpoint.get) {
				return
			}
			const response = await fetch(endpoint.name)
			const json = (await response.json()) as DataType
			console.log(json)
			setData(prevData => ({ ...prevData, [endpoint.data]: json }))
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	})
}

export async function handleSubmit(
	dataName: keyof DataType,
	setData: React.Dispatch<React.SetStateAction<DataType>>,
	form: DataType
) {
	try {
		const response = await fetch(endpoints[dataName].name, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form[dataName])
		})
		const json = (await response.json()) as DataType
		console.log(json)
		setData(prevData => ({ ...prevData, [endpoints[dataName].data]: json }))
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export async function handleCreateUser(
	createUser: UserType,
	setData: React.Dispatch<React.SetStateAction<DataType>>,
	setCreateUser: React.Dispatch<React.SetStateAction<UserType>>
) {
	try {
		const response = await fetch(endpoints.authUsers.name, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(createUser)
		})
		const json = (await response.json()) as DataType
		console.log(json)
		if (!response.ok) {
			throw new Error('Failed to create user')
		}
		setData(prevData => ({ ...prevData, [endpoints.authUsers.data]: json }))
		setCreateUser({} as UserType)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export async function handleDeleteUser(
	deleteUser: UserType,
	setData: React.Dispatch<React.SetStateAction<DataType>>,
	setDeleteUser: React.Dispatch<React.SetStateAction<UserType>>
) {
	try {
		const response = await fetch(
			`${endpoints.authUsers.name}?name=${deleteUser.name}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
				// body: JSON.stringify(deleteUser)
				// need to pass deleteUser.name as query param not in body
				// body: JSON.stringify({ name: deleteUser.name })
			}
		)
		const json = (await response.json()) as DataType
		console.log(json)
		if (!response.ok) {
			throw new Error('Failed to delete user')
		}
		setData(prevData => ({ ...prevData, [endpoints.authUsers.data]: json }))
		setDeleteUser({} as UserType)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export function generateRandomData(
	first: number,
	length: number,
	maxDeviation: number
): number[] {
	const arr: number[] = []
	arr.push(Number.parseFloat(first.toFixed(2)))
	while (arr.length < length) {
		const deviation = first * maxDeviation * Math.random()
		const addOrSubtract = Math.random() < 0.5 ? -1 : 1
		const newValue = Number.parseFloat(
			(first + addOrSubtract * deviation).toFixed(2)
		)
		arr.push(newValue)
	}

	return arr
}
