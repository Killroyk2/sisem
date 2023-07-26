
const jwt = require('jsonwebtoken')

//payload 

function tokenGenerator(pName,givenName,familyName,pPatient){
    const payload = {
        iss: 'CLIENTAPP|PRO',
        sub: 'bogota_medico',
        aud: 'MYMED',
        roles: {
            code: 'CRUE',
            display: 'CRUE'
        },
        name: pName,
        preferred_username: '',
        give_name: 'Laura',
        family_name: 'Ruiz Lopez',
        patient: '2.16.170.1.1.1.1.1|7845236910'
    
    }; 
}


const payload = {
    iss: 'CLIENTAPP|PRO',
    sub: 'bogota_medico',
    aud: 'MYMED',
    roles: {
        code: 'CRUE',
        display: 'CRUE'
    },
    name: 'Laura Ruiz Lopez',
    preferred_username: '',
    give_name: 'Laura',
    family_name: 'Ruiz Lopez',
    patient: '2.16.170.1.1.1.1.1|7845236910'

};
//creacion del token
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', header: { typ: "JWT", alg: "RS256", kid: "W_JlMGvcoTw6xGO-qSj0uu6VaFINMtikQRN5xBZ61J4"},expiresIn:'90d'})