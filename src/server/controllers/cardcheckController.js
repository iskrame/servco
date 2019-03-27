const moment = require('moment');
const Cardcheck = require('./../models/cardchecks');

/**
 * Gets the period that matches an specific date
 * @param {moment} day 
 */
const getPeriod = (day) => {
  let week = day.week();
  let start = null;
  let end = null;

  if (week % 2 == 0) {
    //first week
    start = day.startOf('week');
    end = start.clone().add(1, 'week').endOf('week');

  } else {
    //second week
    end = day.endOf('week');
    start = end.clone().add(-1, 'week').startOf('week');

  }

  return { start, end };
}


const findByPeriod = (body, callback) => {
  let start = null;
  let end = null;
  
  if (body.start && body.end) {
    //get the period based on what's requested
    start = moment(body.start);
    end = moment(body.end).endOf('day');
  } else {
    //get the period based on today's date
    const period = getPeriod(moment());
    start = period.start;
    end = period.end.endOf('day');
  }

  Cardcheck.find({ 
    idZkTeco: body.idZkTeco,
    created: {
      $gte: start,
      $lte: end
    }
  },
  null, //columns you want to collect (null to take all of them)
  {
    sort:{
      created: 'asc'
    }
  }, (err, cardchecks) => {
    if (err) {
      console.log(err);
      throw err;
    }

    const checks = [];
    //transforms cardchecks into punches
    cardchecks.map(cardcheck => {
      const created = moment(cardcheck.get('created')).format("DD/MMM/YYYY");
      const punch = moment(cardcheck.get('created')).format("HH:mm:ss");

      let index = 0;
      let found = -1;

      for (check of checks) {
        if (check.day === created) {
          found = index;
          break;
        }
        index++;
      }

      if (found == -1) {
        checks.push({
          day: created,
          punches: [punch]
        });
      } else {
        checks[found].punches.push(punch);
      }

    });
    

    callback(checks);
  });
}

exports.punchtimes = (req, callback) => {
  return new Promise( (resolve, reject) => {
    findByPeriod(req.body, checks => {

      //transform array to csv
      for(i in checks){
        checks[i].punches = checks[i].punches.join(",");
      }

      return resolve(checks);
    })
  });
}

exports.timespent = (req) => {
  return new Promise((resolve, reject) =>{
    findByPeriod(req.body, checks => {
      let millisCounter = 0;
      let checkin = null;
      let checkout = null;

      //gets the difference in milliseconds 
      //of consecutive punches
      for (let check of checks) {
        let i = 1;
        for (let punch of check.punches) {
          if (i % 2 != 0) {
            //check in
            checkin = moment(punch, 'HH:mm:ss');
          } else {
            //check-out
            checkout = moment(punch, 'HH:mm:ss');
            millisCounter += Math.abs(checkin.diff(checkout));
          }
          i++;
        }
      }

      let sec = millisCounter / 1000;
      let hour = parseInt(sec / 3600);
      sec = sec % 3600;
      let min = parseInt(sec / 60);
      sec = parseInt(sec % 60);
      let totalHours = (millisCounter / (1000 * 60 * 60)).toFixed(1);

      return resolve({timespent: `${hour}h ${min}m ${sec}s`, hours: totalHours});
    });

  });
  
}

exports.lastcheck = (req) =>{
  return new Promise( (resolve, reject)=> {
    Cardcheck.find({
      idZkTeco: req.body.idZkTeco,
    }).limit(1)
    .sort({created: 'desc'})
    .exec((err, res)=>{
      if(err){
        console.log(err);
        throw err;
      }
      if(res.length > 0){
        const lastCheck = moment(res[0].get('created'));
        return resolve(lastCheck.format('LLL'));
      }else{
        return resolve(null);
      }
    });
  });
}

exports.findByPeriod = findByPeriod;
exports.getPeriod = getPeriod;