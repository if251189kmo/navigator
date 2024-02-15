import express from 'express';
import { asyncAuthorization } from './helpers/auth';

const router = express.Router();

router.post('/auth', asyncAuthorization);

export default router;
