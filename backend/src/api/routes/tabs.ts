import express from 'express';
import tabsValidation from '../../services/validation/tabs';
import { asyncVeryfication } from './helpers/auth';
import { createAsyncTabs, deleteAsyncTabs, editAsyncTabs, getAsyncTabs } from './helpers/tabs';

const router = express.Router();
const { createValid, editValid, deleteValid } = tabsValidation;

router.get('/tabs', getAsyncTabs);
router.post('/tabs', asyncVeryfication, createValid, createAsyncTabs);
router.put('/tabs/:id', asyncVeryfication, editValid, editAsyncTabs);
router.delete('/tabs/:id', asyncVeryfication, deleteValid, deleteAsyncTabs);

export default router;
