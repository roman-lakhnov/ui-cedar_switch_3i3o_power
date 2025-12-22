import axios from 'axios'

const api = axios.create({
	baseURL: '/api'
})

export type relayState = Record<string, boolean>

export async function getRelayState(): Promise<relayState> {
	const { data } = await api.get<relayState>('/relays/state')
	return data
}

export async function postRelayState(
	newState: relayState
): Promise<relayState> {
	const { data } = await api.post<relayState>('/relays/state', newState)
	return data
}
