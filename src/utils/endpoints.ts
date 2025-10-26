import type { EndpointsType } from '@/types'

// export const API_BASE_URL = 'http://192.168.88.98:8080/api'
export const API_BASE_URL = '/api'
// DONE
const SAFE_STATE = `${API_BASE_URL}/relays/safe_state`
const RELAY_STATE = `${API_BASE_URL}/relays/state` // GET+ POST-
const MQTT_SETTINGS = `${API_BASE_URL}/mqtt/settings` // GET+ POST-const REBOOT = `${API_BASE_URL}/system/reboot` // GET- Method Not Allowed
const REBOOT_REQUIRED = `${API_BASE_URL}/system/reboot_required` // GET+
const SYSTEM_REBOOT = `${API_BASE_URL}/system/reboot`
// TODO
const USERS = `${API_BASE_URL}/auth/users`
// const LOGIN = `${API_BASE_URL}/auth/login` // GET- Session token or username password invalid
// const MKDIR = `${API_BASE_URL}/webui/mkdir` // GET- Method Not Allowed
// const UPLOAD = `${API_BASE_URL}/webui/upload` // GET- Method Not Allowed
// const WEBUI_DELETE = `${API_BASE_URL}  "/webui/delete` // GET- Method Not Allowed

export const endpoints: EndpointsType = {
	safeState: {
		name: SAFE_STATE,
		data: 'safeState',
		get: true,
		post: true,
		delete: false
	},
	relayState: {
		name: RELAY_STATE,
		data: 'relayState',
		get: true,
		post: true,
		delete: false
	},
	mqttSettings: {
		name: MQTT_SETTINGS,
		data: 'mqttSettings',
		get: true,
		post: true,
		delete: false
	},
	systemRebootRequired: {
		name: REBOOT_REQUIRED,
		data: 'systemRebootRequired',
		get: true,
		post: false,
		delete: false
	},
	systemReboot: {
		name: SYSTEM_REBOOT,
		data: 'systemReboot',
		get: false,
		post: true,
		delete: false
	},
	authUsers: {
		name: USERS,
		data: 'authUsers',
		get: true,
		post: true,
		delete: true
	}
}
