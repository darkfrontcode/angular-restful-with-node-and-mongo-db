/**
    @description Dependencies
*/
const express = require(`express`);
const router  = express.Router();


/**
    @description Restful Routes
*/
const create = require(`./api/create`);
const all    = require(`./api/all`);
const read   = require(`./api/read`);
const update = require(`./api/update`);
const remove = require(`./api/remove`);


/**
    @description Restful Router
*/
router.post(`/api/people`, create);
router.get(`/api/people`, all);
router.get(`/api/people/:id`, read);
router.put(`/api/people/:id`, update);
router.patch(`/api/people/:id`, update);
router.delete(`/api/people/:id`, remove);


/**
    @description App Router
*/
router.get('/', (req, res) => res.render(`index`))
router.get('/views/:name', (req, res) => res.render(`views/${req.params.name}`))



/**
    @description Export module
*/
module.exports = router;
