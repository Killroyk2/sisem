//This controller is used to add a new report to the database

const Report = require("../service/ReporteService");

function ReportController() {

  const addReport = function(req, res) {
    Report.add(req).then(data => res.json(data));
  };


  return {
    
    add: addReport
  };
}

module.exports = ReportController();