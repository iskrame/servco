const indicator = require('./indicatorController');
const cardcheck = require('./cardcheckController');
const chart = require('./chartController');
const moment = require('moment');


exports.dashboard = async (req, res) => {
  const actualPeriod = cardcheck.getPeriod(moment());
  const dashboard = {
    ActualPeriod: {
      start: actualPeriod.start.format("DD/MMM/YYYY"),
      end: actualPeriod.end.format("DD/MMM/YYYY")
    },
    GridData: await cardcheck.punchtimes(req),
    DashboardIndicators: await indicator.findWithValue(req)
  };

  res.json(dashboard);

}

exports.timeChart = async (req, res) => {
  const timeChart = {
    ChartData: await chart.getData(req)
  };

  res.json(timeChart);

}

