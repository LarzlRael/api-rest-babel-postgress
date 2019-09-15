import { Router } from 'express';
//importando el controlador de proects
import {
    createProject, getProjects, getOneProject, deleteProject, updateProject
} from '../controllers/projects.Controller'
const router = Router();
//metodos get
router.get('/', getProjects);
router.get('/:id', getOneProject);
//metodos post
router.post('/', createProject);
//delete routes
router.delete('/:id', deleteProject);

//put routes

router.put('/:id', updateProject);



export default router;