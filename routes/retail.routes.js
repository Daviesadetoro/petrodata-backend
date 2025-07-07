const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { createRetailPrice, getRetailPrices } = require('../controllers/retail.controller');
const { approveRetailPrice } = require('../controllers/retail.controller');
router.put('/:id/approve', auth, approveRetailPrice);
const { deleteRetailPrice } = require('../controllers/retail.controller');
router.delete('/:id', auth, deleteRetailPrice);



router.post('/', auth, createRetailPrice); 
router.get('/', getRetailPrices);          

module.exports = router;
