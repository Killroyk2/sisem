module.exports = {
    get:{
        tags:['Operaciones Ocupacion de Camas'],
        description: "Get todas las ocupaciones de camas general", 
        operationId: "camasUciGral",
        responses:{
            '200':{
                description:"Ocupacion de camas control han sido obtenidas",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/OcupacionCamas"
                        }
                    }
                }
            },
            '404':{
                description: "No se obtuvo ninguna respuesta",
            }
        }
    }
}