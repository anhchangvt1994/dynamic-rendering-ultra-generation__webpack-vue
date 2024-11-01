import { RouteLocationNormalized } from 'vue-router'

const ValidationOnRouteHandler = (to: RouteLocationNormalized) => {
	const correctPath = to.path.replace(/\/{2,}/, '/')

	switch (true) {
		case to.path !== correctPath:
			return {
				redirectPath: correctPath,
				status: 301,
			}
		default:
			return {
				status: 200,
			}
	}
} // ValidationOnRouteHandler

export default ValidationOnRouteHandler
