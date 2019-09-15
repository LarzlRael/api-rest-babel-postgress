import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database';

const taskModel = sequelize.define('tasks', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT,
    },
    done: {
        type: Sequelize.BOOLEAN,
    },
    project_id: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false
});

export default taskModel;