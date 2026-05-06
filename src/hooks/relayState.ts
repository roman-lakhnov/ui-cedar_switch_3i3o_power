import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getMatterState, getRelayState, postRelayState, type relayState } from '../api/client'

export function useRelayState() {
	return useQuery({
		queryKey: ['relayState'],
		queryFn: getRelayState
	})
}

export function useMatterState() {
	return useQuery({
		queryKey: ['matterState'],
		queryFn: getMatterState
	})
}


export function usePostRelayState() {

	const qc = useQueryClient()
	const mutation = useMutation({
		mutationFn: (newData: relayState) => postRelayState(newData),
		onSuccess: data => {
			// Update cache directly with data from POST response
			qc.setQueryData(['relayState'], data)
		}
	})
	const postNewState = (newData: relayState) => mutation.mutate(newData)
	return {
		postNewState,
		isPending: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error
	}
}
