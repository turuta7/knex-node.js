const personService = require('../service/person') 

class PersonController {
    async createPerson(req, res, next) {
        try {
            const id = await personService.createPerson(req.body);
            res.status(200).json(id)
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}

module.exports = new PersonController();

