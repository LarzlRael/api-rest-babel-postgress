import Sequelize from 'sequelize';

export const sequelize =  new Sequelize(
    'projects_tasks', //database 
    'postgres', //user
    'root',//user password
    {
        host:'localhost',
        dialect: 'postgres',//tipo de dialecnto que tenemos 
        pool:{
            max:5,
            min:0,
            require : 30000,
            idle:10000
        },
        logging:false
    }
)

