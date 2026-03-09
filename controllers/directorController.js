
function create (req, res) {
    const { director_name } = req.body

    console.log(director_name)
}

module.exports = [
    create
]