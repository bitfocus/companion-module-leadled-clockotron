const fetch = require('node-fetch')

let url
let urlSuffix = 'http://'
let urlPort = ':5491/'

class Clockotron {
	constructor(clockotronIp) {
		this.clockotronUrl = urlSuffix + clockotronIp + urlPort
	}

	Connect() {
		return new Promise((resolve, reject) => {
			url = this.clockotronUrl + 'api'
			fetch(url)
				// fetch(url + this.token, this.GETOption())
				.then((res) => {
					if (res.status == 200) {
						console.log('sucess connection')
						resolve(res.status)
					} else {
						console.log('reject connection')
						reject(res.status)
					}
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

	toggle() {
		url = this.clockotronUrl + 'start'
		fetch(url)
	}

	clear() {
		url = this.clockotronUrl + 'clear'
		fetch(url)
	}

	reset() {
		url = this.clockotronUrl + 'reset'
		fetch(url)
	}

	postClock() {
		url = this.clockotronUrl + 'postClock'
		fetch(url)
	}

	numpad(digit) {
		url = this.clockotronUrl + 'digit?value=' + digit
		fetch(url)
	}

	increment(unit) {
		url = this.clockotronUrl + unit + 'Up'
		fetch(url)
	}

	decrement(unit) {
		url = this.clockotronUrl + unit + 'Down'
		fetch(url)
	}

	speed(verb) {
		url = this.clockotronUrl + verb
		fetch(url)
	}
}

exports = module.exports = Clockotron
