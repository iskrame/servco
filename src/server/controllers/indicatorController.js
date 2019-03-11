const moment = require('moment');
const cardcheck = require('./cardcheckController');
const Indicators = require('./../models/indicators');

const HOURS_BY_PERIOD = 1;
const HOURS_BY_WEEK = 2;
const HOURS_BY_DAY = 3;

/**
 * Finds all indicators adding them the value
 * depending on their type
 */
exports.findWithValue = (req) =>{
  return new Promise((resolve, reject)=>{
    Indicators.find({}, async (err, indicators) =>{

      for(indicator of indicators){
        let value = null;
        switch(indicator.get('type')){
          case HOURS_BY_PERIOD:
            value = await cardcheck.timespent(req);
            indicator.set('value', value.timespent, {strict: false});
            break;
        }
      }

      return resolve(indicators);
    });

  });

}; 
