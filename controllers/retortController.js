const { User, Retort, Counter } = require("../models")

module.exports = {

    getRetort(req, res) {
        Retort.find({})
            .then((retort) => res.json(retort))
            .catch((err) => res.status(500).json(err))
    },
    getSingleRetort(req, res) {
        Retort.findOne({ _id: req.params.retortId })
            .select("-__v")
            .then((retort) =>
                !retort
                    ? res.status(404).json({ message: "ID doesn't exist" })
                    : res.json(retort)
            )
            .catch((err) => res.status(500).json(err))
    },
    createRetort(req, res) {
        Retort.create(req.body)
            .then(({ _id  }) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { retorts: _id } },
                    { new: true }
                )
            })
            .then((retort) =>
                !retort
                    ? res.status(404).json({ message: "ID doesn't exist" })
                    : res.json(retort)
            )
            .catch((err) => res.status(500).json(err))
    },
    updateRetort(req, res) {
        Retort.findOneAndUpdate(
            { _id: req.params.retortId}
        )
    }
}