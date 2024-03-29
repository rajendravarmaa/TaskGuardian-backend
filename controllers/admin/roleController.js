const { validationResult } = require('express-validator');

const Role = require('../../models/roleModel');

const storeRole = async(req, res) => {
  
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(200).json({
                success: false,
                msg: 'Errors',
                errors: errors.array()
            });
        }

        const { role_name, value } = req.body;

        const role = new Role({
            role_name,
            value
        });

        const roleData = await role.save();

        return res.status(200).json({
            success: true,
            msg: 'Role Created successfully!',
            data: roleData
        });


    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}


const getRoles = async(req, res) => {
    try{
        const roles = await Role.find({
            value: {
                $ne:"admin"
            }
        });

        return res.status(200).json({
            success: true,
            msg: 'Roles Fetched Successfully!',
            data: roles
        });

    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}
module.exports = { storeRole, getRoles }