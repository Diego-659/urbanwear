const router = require('express').Router()
const auth = require('../middlewares/auth')
const { getAll, getMyOrders, create, updateStatus } = require('../controllers/orderController')

router.get('/', auth, getAll)
router.get('/my-orders', auth, getMyOrders)
router.post('/', auth, create)
router.put('/:id/status', auth, updateStatus)

module.exports = router