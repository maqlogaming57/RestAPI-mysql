const dbPool = require('../config/databases');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

/* Data didapatkan dari request body */
const createNewUser = (body) =>{
    const SQLQuery= `   INSERT INTO users (name, address, email)
                    VALUES ('${body.name}', '${body.address}', '${body.email}')`;
        
    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery= `   UPDATE users
                        SET name='${body.name}', address='${body.address}', email='${body.email}'
                        WHERE id=${idUser}`;
        
    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery= `   DELETE FROM users WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}