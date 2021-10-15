const { date } = require('casual');
const casual = require('casual');

module.exports = () => {

    const listaDeTurnosS = {
        users: []
    };


    for (let i = 0; i < 10; i++) {

        const newLocal = "turno"
        listaDeTurnosS.users.push ({
            "id": casual.uuid,
            "full_name": casual.full_name,
            "mail": casual.email,
            "edad": casual.integer(from = 15, to = 100),
            "turno": casual.integer(from = 1, to = 7).toString(),
            "fecha": casual.date(format = 'YYYY-MM-DD'),
        });
    }
    return listaDeTurnosS;
}
