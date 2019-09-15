import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database';

import taskModel from './taskModel';
const ProjectModel = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverdate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});
ProjectModel.hasMany(taskModel, {
    foreingKey: 'project_id',
    sourceKey: 'id'
});
taskModel.belongsTo(ProjectModel,{
    foreingKey:'project_id',
    sourceKey:'id'
})

export default ProjectModel;