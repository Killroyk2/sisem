
module.exports = {
    components:{
        schemas:{
            OcupacionCamas:{
                type:'object',
                properties:{
                    CamasFuncionales:{
                        type:'string',
                        description:"Numero total de camas funcionales",
                        example:"10"
                    },
                    CamasOcupadasTotal:{
                        type:'string',
                        description:"Numero total de camas ocupadas",
                        example:"8"
                    },
                    Ocupacion:{
                        type:'string',
                        description:"Porcentaje de ocupacion de camas",
                        example:"80%"
                    },
                    Sobrecupo:{
                        type:'string',
                        description:"Si hay sobrecupo SI, de lo contrario NO", 
                        example:"SI"
                    },
                    GrupoCama:{
                        type:'string',
                        description:"Grupo al que pertenece la cama",
                        example:"UCI ADULTOS"
                    },
                    NombreIps:{
                        type:'string',
                        description:"Nombre de la institucion prestadora de servicios de salud ",
                        example:"GRUPO EMPRESARIAL JARBSALUD IPS S.A.S."
                    }
                }
            }
        }
    }
}