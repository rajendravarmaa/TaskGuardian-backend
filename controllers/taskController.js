const { validationResult } = require('express-validator');

const Task = require('../models/taskModel')

const createTask = async(req, res) => {
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(200).json({
                success: false,
                msg: 'Errors',
                errors: errors.array()
            });
        }

        const { tasks, status, user, assignee } = req.body;

        var obj = {
            tasks,
            status,
            user,
            assignee
        };

        if(req.body.categories){
            obj.categories = req.body.categories;
        }

        const task = new Task( obj );

        const taskData = await task.save();

        const taskFullData = await Task.findOne({ _id: taskData._id }).populate([
            { path: 'categories' },
            { path: 'assignee', select: 'name' } // Populate 'assignee' field with name only
        ]);

        return res.status(200).json({
            success: true,
            msg: 'Task created successfully!',
            data: taskFullData
        });


    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}

const getTasks = async(req, res) => {
    try{
        const tasks = await Task.find({}).populate('categories','status');

        return res.status(200).json({
            success: true,
            msg: 'Task Fetched successfully!',
            data: tasks
        });

    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}

const deleteTask = async(req, res) => {
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(200).json({
                success: false,
                msg: 'Errors',
                errors: errors.array()
            });
        }

        const { id } = req.body;

        const isExists = await Task.findOne({ _id:id });

        if(!isExists){
            return res.status(400).json({
                success: false,
                msg: "Task does not exist!"
            });
        }

        await Task.findByIdAndDelete({ _id:id });

        return res.status(200).json({
            success: true,
            msg: 'Task Deleted successfully!',
        });

    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Task does not exist"
        });
    }
}


const updateTask = async(req, res) => {
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(200).json({
                success: false,
                msg: 'Errors',
                errors: errors.array()
            });
        }

        const { id, tasks, status } = req.body;

        const isExists = await Task.findOne({ _id:id });

        if(!isExists){
            return res.status(400).json({
                success: false,
                msg: "Task does not exist!"
            });
        }

        var updateObj = {
            tasks,
            status
        }

        if(req.body.categories){
            updateObj.categories = req.body.categories;
        }

        const updatedTask = await Task.findByIdAndUpdate({ _id:id },{
            $set: updateObj
        }, { new:true });

        return res.status(200).json({
            success: true,
            msg: 'Task Updated successfully!',
            data: updatedTask
        });

    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: "Task does not exist"
        });
    }
}

module.exports = { createTask, getTasks, deleteTask, updateTask }
