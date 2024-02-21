import { Router } from 'express';
import { getAll, getById, getAllOrderById, getLastId, create, deleteRow } from '../controllers/contact';

export const contact = Router();

contact.get('/getAll', getAll);
contact.get('/create', create);
// contact.post('/update', update);
// contact.get('/getLast', getLast);
// // router.post('/delete', delete);
contact.get('/getById', getById);
contact.get('/getAllOrderById', getAllOrderById);
contact.get('/getLastId', getLastId);
contact.get('/deleteRow', deleteRow);
