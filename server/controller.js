module.exports = {
  addUser: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.add_user([username, password]).then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  getUser: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.login_user([username, password]).then(response => {
      return res.status(200).json(response);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  }
}