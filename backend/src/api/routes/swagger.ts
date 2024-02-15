import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './../../../swagger';

const router = express.Router();

router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDoc));

export default router;
