
function create (req, res) {
    const { category_name } = req.body

    console.log(category_name)
}

module.exports = [
    create
]