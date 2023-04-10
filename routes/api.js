var express = require('express');
var router = express.Router();
var api_user = require('../controllers/api/user.api');

router.get('/user', api_user.list);
router.post('/user', api_user.add);
router.put('/user/:id', api_user.update);

module.exports = router;
