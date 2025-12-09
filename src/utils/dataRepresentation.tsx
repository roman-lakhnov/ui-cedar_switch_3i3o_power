import {
	Activity,
	BatteryCharging,
	Power,
	RotateCcw,
	TrendingUp,
	Zap
} from 'lucide-react'

export const dataRepresentation = {
	'Network voltage': {
		icon: <Zap />,
		color: 'blue'
	},
	Current: {
		icon: <Activity />,
		color: 'green'
	},
	'Power factor': {
		icon: <TrendingUp />,
		color: 'orange'
	},
	'Active power': {
		icon: <Power />,
		color: 'purple'
	},
	'Reactive power': {
		icon: <RotateCcw />,
		color: 'red'
	},
	'Accumulated energy': {
		icon: <BatteryCharging />,
		color: 'grey-dark'
	}
}
