module.exports = {
    
    uploadGcp: (req, res) => {
        res.status(200).json({"url": req.publicUrl})
    }

}