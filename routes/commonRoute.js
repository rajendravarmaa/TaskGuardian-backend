const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware.js');

const { AdminManagerAccess } = require('../middlewares/permissionMiddleware.js');
const { onlyAdminAccess } = require('../middlewares/adminMiddleware.js')


const { createUserValidator, updateUserValidator,deleteUserValidator } = require('../helpers/validator.js');

const { categoryAddValidator, categoryDeleteValidator, categoryUpdateValidator, taskAddValidator, tasksDeleteValidator, tasksUpdateValidator } = require('../helpers/adminValidator');

const categoryController = require('../controllers/categoryController.js');

const taskController = require('../controllers/taskController.js');
const userController = require('../controllers/userController.js');
//category routes
router.post('/add-category', auth, categoryAddValidator,  categoryController.addCategory);
router.get('/get-categories', auth, categoryAddValidator,  categoryController.getCategories);
router.post('/delete-category', auth, categoryDeleteValidator,  categoryController.deleteCategory);
router.post('/update-category', auth, categoryUpdateValidator,  categoryController.updateCategory);

//task routes
router.post('/create-task', auth, AdminManagerAccess, taskAddValidator, taskController.createTask);
router.get('/get-tasks', auth, taskController.getTasks);
router.post('/delete-task', auth, AdminManagerAccess, tasksDeleteValidator, taskController.deleteTask);
router.post('/update-task', auth, tasksUpdateValidator, taskController.updateTask);

//user routes
router.post('/create-user', auth, onlyAdminAccess, createUserValidator, userController.createUser);
router.get('/get-users', auth, onlyAdminAccess, userController.getUsers);
router.post('/update-user', auth, onlyAdminAccess, updateUserValidator, userController.updateUser);
router.post('/delete-user', auth, onlyAdminAccess, deleteUserValidator, userController.deleteUser);


module.exports = router;