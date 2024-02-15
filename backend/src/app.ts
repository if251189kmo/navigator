import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// routes
import auth from './api/routes/auth';
import links from './api/routes/links';
import tabs from './api/routes/tabs';
import swaggerRouter from './api/routes/swagger';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/navigator', swaggerRouter);
app.use('/navigator', auth);
app.use('/navigator', links);
app.use('/navigator', tabs);

export default app;
