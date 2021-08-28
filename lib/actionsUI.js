module.exports = {
	getActions() {
		return {
			toggle: {
				label: 'Toggle Timer',
			},
			clear: {
				label: 'Clear Input',
			},
			reset: {
				label: 'Reset Timer',
			},
			postClock: {
				label: 'Enter',
			},
			increment: {
				label: 'Increment',
				options: [
					{
						type: 'dropdown',
						label: 'Unit',
						id: 'unit',
						choices: [
							{
								id: 's',
								label: 'Seconds',
							},
							{
								id: 'm',
								label: 'Minutes',
							},
							{
								id: 'h',
								label: 'Hours',
							},
						],
						default: 'Select Unit',
					},
				],
			},
			decrement: {
				label: 'Decrement',
				options: [
					{
						type: 'dropdown',
						label: 'Unit',
						id: 'unit',
						choices: [
							{
								id: 's',
								label: 'Seconds',
							},
							{
								id: 'm',
								label: 'Minutes',
							},
							{
								id: 'h',
								label: 'Hours',
							},
						],
						default: 'Select Unit',
					},
				],
			},
			speed: {
				label: 'Speed',
				options: [
					{
						type: 'dropdown',
						label: 'Direction',
						id: 'verb',
						choices: [
							{
								id: 'slower',
								label: 'Slower',
							},
							{
								id: 'normal',
								label: 'Normal',
							},
							{
								id: 'faster',
								label: 'Faster',
							},
						],
						default: 'Select Speed',
					},
				],
			},
			numpad: {
				label: 'Numpad',
				options: [
					{
						type: 'dropdown',
						label: 'Digit',
						id: 'digit',
						choices: [
							{
								id: '0',
								label: '0',
							},
							{
								id: '1',
								label: '1',
							},
							{
								id: '2',
								label: '2',
							},
							{
								id: '3',
								label: '3',
							},
							{
								id: '4',
								label: '4',
							},
							{
								id: '5',
								label: '5',
							},
							{
								id: '6',
								label: '6',
							},
							{
								id: '7',
								label: '7',
							},
							{
								id: '8',
								label: '8',
							},
							{
								id: '9',
								label: '9',
							},
						],
						default: 'Select a Digit',
					},
				],
			},
		}
	},
}
