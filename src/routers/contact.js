import { Router } from 'express';
import { getAll, getById, getAllOrderById, getLastId } from '../controllers/contact';

export const contact = Router();

contact.get('/getAll', getAll);
// contact.post('/create', create);
// contact.post('/update', update);
// contact.get('/getLast', getLast);
// // router.post('/delete', delete);
contact.get('/getById', getById);
contact.get('/getAllOrderById', getAllOrderById);
contact.get('/getLastId', getLastId);
