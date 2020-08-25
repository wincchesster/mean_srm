module.exports = (res, error) => {
    res.status(500).json({
        success: false,
        messege: error.messege ? error.messege : error
    })
}