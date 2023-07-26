const Ocupation = require("../services/ocupation-service");

function listCtrl(req, res) {
  try {
    const nombreIps = req.query.nombreIps;
    Ocupation.listCtrl(nombreIps).then(data => res.status(200).json(data));
  } catch (error) {
    throw error;
  }
}
function listGral(req, res) {
  try {
    const nombreIps = req.query.nombreIps;
    Ocupation.listCtrl(nombreIps).then(data => res.status(200).json(data));
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listCtrl,
  listGral
};
