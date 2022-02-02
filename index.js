const instance_skel = require('../../instance_skel')

const api = require('./lib/api')

const actions = require('./lib/actions')
const actionUI = require('./lib/actionsUI')

class instance extends instance_skel {
	constructor(system, id, config) {
		super(system, id, config)
		Object.assign(this, {
			...actionUI,
			...actions,
		})

		return this
	}

	init() {
		this.initClockotron(this.config)
	}

	updateConfig(config) {
		this.config = config
		this.initClockotron(this.config)
	}

	async initClockotron(config) {
		try {
			this.Clockotron = new api(config.clockotronIp)

			let res = await this.Clockotron.Connect()

			if (res !== 200) {
				this.debug(e.message)
				this.status(this.STATUS_WARNING, 'No Clockotron at this Address')
			} else {
				this.setActions(this.getActions())

				this.status(this.STATUS_OK, 'OK')
			}
		} catch (e) {
			this.debug('error', e)
		}
	}

	destroy() {
		this.debug('destroy', this.id)
	}

	config_fields() {
		return [
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module connects to Clockotron via por 5491, enter the IP address below',
			},
			{
				type: 'textinput',
				id: 'clockotronIp',
				label: 'Clockotron IP ',
				width: 12,
				default: '127.0.0.1',
			},
		]
	}

	handleConnectionError() {
		this.log('error', 'Clockotron connection lost')
		this.status(this.STATUS_ERROR, 'Connection error')
	}

	handleError(error) {
		if (error.code === 'ECONNREFUSED') {
			return this.handleConnectionError()
		} else {
			this.log('error', error.message)
			this.debug(error)
		}
	}

	action({ action, options }) {
		this[action](options)
			.then(() => {
				this.status(this.STATUS_OK, 'Ready')
			})
			.catch((e) => {
				this.handleError(e)
			})
	}
}

exports = module.exports = instance
