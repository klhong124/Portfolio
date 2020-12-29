const middleware = {}

middleware['isAuth'] = require('../middleware/isAuth.js')
middleware['isAuth'] = middleware['isAuth'].default || middleware['isAuth']

export default middleware
