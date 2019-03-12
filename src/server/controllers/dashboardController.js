const indicator = require('./indicatorController');
const cardcheck = require('./cardcheckController');

exports.dashboard = async (req, res) => {
  const dashboard = {
    GridData: await cardcheck.punchtimes(req),
    DashboardIndicators: await indicator.findWithValue(req)
  };

  res.json(dashboard);

}