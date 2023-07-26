const Report = require("../models/Report");

function ReportService() {
  return {

    add: data => new Report(data).save()
  };
}



module.exports = ReportService();
