import { Router } from 'express';
import { create } from 'ts-node';
import { getAll, getById } from '../controllers/contact';

export const contact = Router();

contact.get('/getAll', getAll);
// contact.post('/create', create);
// contact.post('/update', update);
// contact.get('/getLast', getLast);
// // router.post('/delete', delete);
contact.get('/getById', getById);
