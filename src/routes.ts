import { Router } from 'express';
import { candidatesController } from './controllers/candidates-controller';
import { companiesController } from './controllers/companies-controller';
import { jobsController } from './controllers/jobs-controller';

const router = Router();

router.get('/', (req, res) => res.json({ message: "Tudo certo!!"}));

// Candidates Routes
router.get('/candidates', candidatesController.index);
router.get('/candidates/:id', candidatesController.show);
router.post('/candidates', candidatesController.save);
router.delete('/candidates/:id', candidatesController.delete);
router.put('/candidates/:id', candidatesController.update);

//Companies Routes
router.get('/companies', companiesController.index);
router.get('/companies/:id', companiesController.show);
router.post('/companies', companiesController.save);
router.delete('/companies/:id', companiesController.delete);
router.put('/companies/:id', companiesController.update);

//Jobs Routes
router.get('/jobs', jobsController.index);
router.get('/jobs/:id', jobsController.show);
router.post('/jobs', jobsController.save);
router.put('/jobs/:id', jobsController.update);
router.delete('/jobs/:id', jobsController.delete);

export { router };