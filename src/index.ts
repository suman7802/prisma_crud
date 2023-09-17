require('dotenv').config();
import express from 'express';
import * as parser from 'body-parser';
import {crudRouter} from './routes/crudRouter';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', crudRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
