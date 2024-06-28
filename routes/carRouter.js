const carController = require('../controllers/carConteroller');
const { protect, restrictTo } = require('../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(carController.getAllcar)
  .post(restrictTo('admin'), carController.createcar);
router
  .route('/:id')
  .get(carController.getcar)
  .patch(restrictTo('admin'), carController.updatecar)
  .delete(restrictTo('admin'), carController.deletecar);
module.exports = router;
