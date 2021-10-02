const casual = require('casual')

module.exports= () => {

    const listaDeTurnosS= {
        users: []
    }


    for (let i = 0; i < 10; i++) {

        listaDeTurnosS.users.push({
            "id": casual.uuid,
            "username": casual.full_name,
            "mail" : casual.email,
            "edad" : casual.integer(from = 15, to = 100),
            "turno" : casual.integer(from = 0, to = 7),
            "fecha" : casual.date(format = 'YYYY-MM-DD'),
        }
        )
        
        
    }
   
    return listaDeTurnosS
}
 