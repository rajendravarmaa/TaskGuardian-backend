const { check } = require('express-validator');


exports.permissionAddValidator = [
    check('permission_name', 'Permission Name is required').not().isEmpty(),
];

exports.permissionDeleteValidator = [
    check('id', 'id is required').not().isEmpty(),
];

exports.permissionUpdateValidator = [
    check('id', 'id is required').not().isEmpty(),
    check('permission_name', 'permission_name is required').not().isEmpty(),

];

exports.categoryAddValidator = [
    check('category_name', 'category_name is required').not().isEmpty(),
];

exports.categoryDeleteValidator = [
    check('id', 'id is required').not().isEmpty(),
];

exports.categoryUpdateValidator = [
    check('id', 'id is required').not().isEmpty(),
    check('category_name', 'category_name is required').not().isEmpty(),
];

exports.taskAddValidator = [
    check('tasks', 'Task is required').not().isEmpty(),
    check('status', 'Status is required and must be one of: todo, in progress, done')
    .notEmpty()
    .isIn(['todo', 'in progress', 'done']),
    check('user', 'User ID is required').not().isEmpty(),
];


exports.tasksDeleteValidator = [
    check('id', 'id is required').not().isEmpty(),
];

exports.tasksUpdateValidator = [
    check('id', 'id is required').not().isEmpty(),
    check('tasks', 'Task is required').not().isEmpty(),
    check('status', 'Status is required and must be one of: todo, in progress, done')
    .notEmpty()
    .isIn(['todo', 'in progress', 'done']),
];


exports.storeRoleValidator = [
    check('role_name', 'Role name is required').not().isEmpty(),
    check('value', 'Invalid role value').isIn(['admin', 'manager', 'user'])
];