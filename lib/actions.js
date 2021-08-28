module.exports = {
	async toggle() {
		await this.Clockotron.toggle()
	},
	async clear() {
		await this.Clockotron.clear()
	},
	async reset() {
		await this.Clockotron.reset()
	},
	async numpad({ digit }) {
		await this.Clockotron.numpad(digit)
	},
	async postClock() {
		await this.Clockotron.postClock()
	},
	async increment({ unit }) {
		await this.Clockotron.increment(unit)
	},
	async decrement({ unit }) {
		await this.Clockotron.decrement(unit)
	},
	async speed({ verb }) {
		await this.Clockotron.speed(verb)
	},
}
