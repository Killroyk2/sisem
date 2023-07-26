const getTodos = require('./get-ocupacionGral');
const getTodo = require('./get-ocupacionCtrl');

module.exports = {
    paths:{
        '/camasUciCtrl':{
            ...getTodos,
        },
        '/camasUciGral':{
            ...getTodo
        }
    }
}