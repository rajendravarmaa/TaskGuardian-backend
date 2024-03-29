const onlyAdminAccess = async(req, res, next) =>{
    
    try{
        if(req.user.role != 'admin'){
            return res.status(400).json({
                success: false,
                msg: 'you do not have permission to access'
            });
        }


    }catch (error) {
        return res.status(400).json({
            success: false,
            msg: 'Something went wrong!'
        });
    }
    return next()
}

module.exports = {
    onlyAdminAccess
}