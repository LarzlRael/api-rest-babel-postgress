import taskModel from '../models/taskModel';
export async function createTask(req, res) {

    try {
        const { name, done, project_id } = req.body;
        const newTask = await taskModel.create({
            name, done, project_id
        }, {
            fields: ['name', 'done', 'project_id']
        });
        res.json({
            message: 'new task created',
        })
    } catch (error) {
        res.json({
            errors: error
        })
    }
}
export async function allTasks(req, res) {
    const allTasks = await taskModel.findAll({
        attributes: ['id', 'project_id', 'name', 'done'],
        order: [
            ['id', 'Desc']
        ]
    });
    res.json({
        data: allTasks
    })
}
export async function getOneTasks(req, res) {
    const { id } = req.params;
    const oneTask = await taskModel.findOne({
        attributes: ['id', 'project_id', 'name', 'done'],
        where: { id }
    })
    res.json({
        data: oneTask
    })
}

export async function deleteTask(req, res) {
    const { id } = req.params;
    const deleteRowCount = await taskModel.destroy({
        where: { id }
    })
    res.json({
        message: 'project delete sucessfully',
        count: deleteRowCount
    })
}

export async function updateTask(req, res) {
    const {
        id
    } = req.params;
    const { name, done, project_id } = req.body;

    const tasks = await taskModel.findAll({
        attributes: ['id', 'name', 'done', 'project_id'],
        where: { id }
    });

    if (tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name, done, project_id,
            });
        });
    }
    return res.json({
        message: 'task updated succesfully',
        data: tasks
    })
}

export async function getTaskByProject(req, res) {
    const { project_id } = req.params;
    const tasks = await taskModel.findAll({
        attributes: ['id', 'project_id', 'done', 'name'],
        where: { project_id }
    });
    res.json({ tasks })
}