const baseController = require('./controller');
const adminOnly = require('../../auth/adminOnly');


module.exports = ( Model, populateList = [], router, controller ) => {

  let currentController;

  if (!controller) {
    currentController = baseController(Model, populateList);
  } else {
    currentController = controller(Model, populateList);
  }
  

  // create
  router.post('/', adminOnly, (req, res, next) => {
    return currentController.create(req, res, next);
  }),


  // read
  router.get('/', (req, res, next) => {
    return currentController.findAll(req, res, next);
  }),

  router.get('/:id', adminOnly, (req, res, next) => {
    return currentController.findOne(req, res, next);
  }),


  // update
  router.put('/:id', adminOnly, (req, res, next) => {
    return currentController.update(req, res, next);
  }),

  router.patch('/:id', adminOnly, (req, res, next) => {
    return currentController.update(req, res, next);
  }),


  // delete
  router.delete('/:id', adminOnly, (req, res, next) => {
    return currentController.delete(req, res, next);
  })
  
  return router
}
