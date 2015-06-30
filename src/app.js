import Router from './router'
import styles from './styles/main.styl'

window.app = {
	init () {
		this.router = new Router()
		this.router.history.start() //represents a browser's hisotory - singleton
	}
}

window.app.init()