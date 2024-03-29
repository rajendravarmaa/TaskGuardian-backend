const AdminManagerAccess = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin' && req.user.role !== 'manager') {
            return res.status(400).json({
                success: false,
                msg: 'You do not have permission to access.'
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: 'Something went wrong!'
        });
    }
    return next();
}

module.exports = {
    AdminManagerAccess
}
