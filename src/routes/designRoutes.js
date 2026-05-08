const express = require('express');
const router = express.Router();
const { getDesigns, saveDesign, updateDesign, deleteDesign } = require('../controllers/designController');
const { protect } = require('../middleware/authMiddleware');
router.get('/', protect, getDesigns);
router.post('/', protect, saveDesign);
router.put('/:id', protect, updateDesign);
router.delete('/:id', protect, deleteDesign);
module.exports = router;
