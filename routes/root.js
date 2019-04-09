const path = require("path");
const router = require('express').Router();

router.get("/", (req, res) => {
	return res.render('root', {title: 'First express app'});
});

router.get("/inc", (req, res) => {
	return res.send(path.join(__dirname, "inc"));
});


router.get("/hello", (req, res) => {
	return res.send(req.vcount + "<br>hey there");
});

module.exports = router;