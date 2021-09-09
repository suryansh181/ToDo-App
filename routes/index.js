const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/',todoController.render);
router.post('/submit',todoController.add);
router.post('/delete-task',todoController.delete);

module.exports= router;
