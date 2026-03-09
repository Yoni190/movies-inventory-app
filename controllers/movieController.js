
function create (req, res) {
    const { title, desc, rating, category, director } = req.body

    console.log(title)
}

module.exports = [
    create
]