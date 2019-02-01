const express = require('express');
const router = express.Router();
const test_controller = require('../controllers/test.controller');

// test
router.get('/test', test_controller.test);

// get
router.get('/:id', test_controller.test_details);

// post
router.post('/create', test_controller.test_create);

// put
router.put('/:id/update', test_controller.test_update);

// delete
router.delete('/:id/delete', test_controller.test_delete);

module.exports = router;