import express, { json } from 'express'
import morgan from 'morgan';
//importando el enrutador
import projectRoutes from './routes/projectsRoutes';
import taskRoutes from './routes/taskRoutes';
const app = express();
//settings

app.set('port', process.env.PORT || 4000);


//middelawares
app.use(morgan('dev'));
app.use(json());

//routes

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;