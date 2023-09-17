import {Router} from 'express';
import {user} from '../controller/crudController';

let crudRouter = Router();

crudRouter.get('/', user.read);
crudRouter.post('/', user.create);
crudRouter.put('/', user.update);
crudRouter.delete('/', user.remove);

export {crudRouter};
