const router = require('express').Router();

router.get("/:from-:to", (req, res) => {
	let a = parseInt(req.params.from);
	let b = parseInt(req.params.to);

	let nums = [];

	if (a > b) {
		let t = a;
		a = b;
		b = t;
	}

	for (let x = a; x <= b; x++) {
		// html += `<div>${x}</div>`;
		nums.push(x);
	}

	res.render('numbers', {title: 'Numbers', numbers: nums } );
});

module.exports = router;