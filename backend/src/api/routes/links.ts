import express from 'express';
import linksValidation from '../../services/validation/links';
import { asyncVeryfication } from './helpers/auth';
import { createAsyncLinks, deleteAsyncLinks, editAsyncLinks, getAsyncLinks } from './helpers/links';

const router = express.Router();
const { createValid, editValid, deleteValid } = linksValidation;

router.get('/links', getAsyncLinks);
router.post('/links', asyncVeryfication, createValid, createAsyncLinks);
router.put('/links/:id', asyncVeryfication, editValid, editAsyncLinks);
router.delete('/links/:id', asyncVeryfication, deleteValid, deleteAsyncLinks);

export default router;
