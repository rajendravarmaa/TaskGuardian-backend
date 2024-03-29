const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware.js');

const roleController = require('../controllers/admin/roleController.js');

const { onlyAdminAccess } = require('../middlewares/adminMiddleware.js')
const permissionController = require('../controllers/admin/permissionController');

const { permissionAddValidator, permissionDeleteValidator, permissionUpdateValidator, storeRoleValidator } = require('../helpers/adminValidator');

//permission routes
router.post('/add-permission', auth, onlyAdminAccess, permissionAddValidator, permissionController.addPermission);
router.get('/get-permissions', auth, onlyAdminAccess, permissionController.getPermissions);
router.post('/delete-permissions', auth, onlyAdminAccess, permissionDeleteValidator, permissionController.deletePermission);
router.post('/update-permissions', auth, onlyAdminAccess, permissionUpdateValidator, permissionController.updatePermission);

//Role.route
router.post('/store-role', auth, onlyAdminAccess, roleController.storeRole);
router.get('/get-roles', auth, onlyAdminAccess, roleController.getRoles);

module.exports = router;