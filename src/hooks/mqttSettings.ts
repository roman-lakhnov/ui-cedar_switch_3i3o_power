import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getMqttSettings, postMqttSettings, type mqttSettings } from '../api/client'

export function useMqttSettings() {
	return useQuery({
		queryKey: ['mqttSettings'],
		queryFn: getMqttSettings
	})
}

export function usePostMqttSettings() {
	const qc = useQueryClient()
	const mutation = useMutation({
		mutationFn: (newData: mqttSettings) => postMqttSettings(newData),
		onSuccess: data => {
			// Update cache directly with data from POST response
			qc.setQueryData(['mqttSettings'], data)
		}
	})
	const postNewSettings = (newData: mqttSettings) => mutation.mutate(newData)
	return {
		postNewSettings,
		isPending: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error
	}
}
