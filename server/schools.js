const db = require('../db') //this is required
const School = require('../db/models/school');

const router = require('express').Router()

router.get('/', function(req, res, next) {
  debugger;
    School.findAll({})
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    School.findOne({
            where:{id:req.params.id},
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
