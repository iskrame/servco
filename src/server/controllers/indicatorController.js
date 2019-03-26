const moment = require('moment');
const cardcheck = require('./cardcheckController');
const Indicators = require('./../models/indicators');

const HOURS_BY_PERIOD = 1;
const HOURS_BY_WEEK = 2;
const HOURS_BY_DAY = 3;
const LAST_RECORD = 4

/**
 * Finds all indicators adding them the value
 * depending on their type
 */
exports.findWithValue = (req) =>{
  return new Promise((resolve, reject)=>{
    Indicators.find({}, async (err, indicators) =>{
      const today = moment();
      for(indicator of indicators){
        let value = null;
        switch(indicator.get('type')){
          case HOURS_BY_PERIOD:
            value = await cardcheck.timespent(req);
            indicator.set('value', value.timespent, {strict: false});
            break;
          case HOURS_BY_WEEK:
            const startOfWeek = today.clone().startOf('week');
            const endOfWeek = today.clone().endOf('week');

            const weekreq = {
              body: {
                idZkTeco: req.body.idZkTeco,
                start: startOfWeek,
                end: endOfWeek
              } 
            };

            value = await cardcheck.timespent(weekreq);
            indicator.set('value', value.timespent, {strict: false});
            break;
          case HOURS_BY_DAY:
            const startOfDay = today.clone().startOf('day');
            const endOfDay = today.clone().endOf('day');

            const dayreq = {
              body: {
                idZkTeco: req.body.idZkTeco,
                start: startOfDay,
                end: endOfDay
              }
            };

            value = await cardcheck.timespent(dayreq);
            indicator.set('value', value.timespent, {strict:false});
            break;
          case LAST_RECORD:
            value = await cardcheck.lastcheck(req);
            indicator.set('value', value, {strict: false});
            break;
        }
      }

      return resolve(indicators);
    });

  });

}; 
