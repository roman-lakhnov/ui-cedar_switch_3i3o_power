import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getSystemRebootRequired,
  postSystemReboot
} from '../api/client'

export function useSystemRebootRequired() {
	return useQuery({
		queryKey: ['systemRebootRequired'],
		queryFn: getSystemRebootRequired
	})
}

export function usePostSystemReboot() {
	const qc = useQueryClient()
	const mutation = useMutation({
		mutationFn: () => postSystemReboot(),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['systemRebootRequired'] })
		}
	})
	const postReboot = () => mutation.mutate()
	return {
		postReboot,
		isPending: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error
	}
}
