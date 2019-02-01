const Test = require('../models/test.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// create test
exports.test_create = function (req, res) {
   
    let test = new Test(
        {
            time: Date.parse(req.body.time),
            type: req.body.type
        }
    );

    test.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Test Created successfully')
    })
};
// get test
exports.test_details = function (req, res) {
    Test.findById(req.params.id, function (err, test) {
        if (err) return next(err);
        res.send(test);
    })
};
// put test
exports.test_update = function (req, res) {
    Test.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, test) {
        if (err) return next(err);
        res.send('test udpated.');
    });
};

// delete test
exports.test_delete = function (req, res) {
    Test.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};