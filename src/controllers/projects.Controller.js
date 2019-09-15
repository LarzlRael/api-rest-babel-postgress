//import the model
import projectModel from '../models/projectModel'
import ProjectModel from '../models/projectModel';

export async function getProjects(req, res) {
    const allprojects = await projectModel.findAll();
    res.json({ data: allprojects })
}
export async function getOneProject(req, res) {
    const { id } = req.params;
    const oneProject = await projectModel.findOne({
        where: { id }
    })
    res.json({ data: oneProject })
}
export async function deleteProject(req, res) {
    const { id } = req.params;
    const deleteRowCount = await projectModel.destroy({
        where: { id }
    })
    res.json({
        message: 'project delete sucessfully',
        count: deleteRowCount
    })
}

// ******* create
export async function createProject(req, res) {
    console.log(req.body);
    const { name, priority, description, deliverdate } = req.body;
    try {
        let newProject = await projectModel.create({
            name, priority, description, deliverdate
        }, {
            fields: ['name', 'priority', 'description', 'deliverdate']
        });
        if (newProject) {
            res.json({
                message: 'project created successfully',
                data: newProject
            })
        }
    } catch (error) {
        //        console.log('los errores son : ',error)
        res.status(500).json({
            message: 'something goes wrong',
            data: {}
        })
    }
    res.send('recibido');
}

//update
export async function updateProject(req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverdate } = req.body;

    const projects = await ProjectModel.findAll({
        attributes: ['id', 'name', 'priority', 'description', 'deliverdate'],
        where: {
            id
        }
    });

    if (projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name, priority, description, deliverdate
            });
        });
    }
    return res.json({
        message: 'Project updated succesfully',
        data: projects
    })
}