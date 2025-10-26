// export const initialData: DataType = {
// 	safeState: {
// 		enabled: false,
// 		relay1: false,
// 		relay2: false,
// 		relay3: false
// 	},
// 	relayState: {
// 		relay1: false,
// 		relay2: false,
// 		relay3: false,
// 		relay4: false
// 	},
// 	mqttSettings: {
// 		enabled: false,
// 		host: '',
// 		port: 0,
// 		user: '',
// 		pass: ''
// 	},
// 	systemRebootRequired: {
// 		reboot_required: false
// 	},
// 	authUsers: {
// 		users: [
// 			{
// 				name: 'admin'
// 			}
// 		]
// 	}
// }

export type UserType = {
	name: string
	password?: string
}

export type DataType = {
	safeState: {
		enabled: boolean
		relay1: boolean
		relay2: boolean
		relay3: boolean
	}
	relayState: {
		relay1: boolean
		relay2: boolean
		relay3: boolean
		relay4: boolean
	}
	mqttSettings: {
		enabled: boolean
		host: string
		port: number
		user: string
		pass: string
	}
	systemRebootRequired: {
		reboot_required: boolean
	}
	systemReboot: false
	authUsers: {
		users: UserType[]
	}
}

export type EndpointType = {
	name: string
	data: keyof DataType
	get: boolean
	post: boolean
	delete: boolean
}

export type EndpointsType = {
	[key in keyof DataType]: EndpointType
}


export interface RelayState {
	id: number
	name: string
	isActive: boolean
}

export interface DigitalInputState {
	id: number
	name: string
	isActive: boolean
}