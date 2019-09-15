import { Router } from 'express';

import {
    createTask, allTasks, getOneTasks, deleteTask, updateTask, getTaskByProject
} from '../controllers/tasks.controler'
const router = Router();
//get routes
router.get('/', allTasks);
router.get('/:id', getOneTasks);
router.get('/projects/:project_id', getTaskByProject);

//post routes
router.post('/', createTask);

//put routes

router.put('/:id', updateTask)
//delte routes

router.delete('/:id', deleteTask)
export default router;