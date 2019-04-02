const moment = require('moment');
const CheckHelper = require('./cardcheckController');
const Cardcheck = require('./../models/cardchecks');

/**
 * Gets the period that matches an specific date
 * @param {moment} day 
 */
const getPreviousPeriod = (day) => {
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

  start = start.subtract(2, 'week');
  end = end.subtract(2, 'week');

  return { start, end };
}
//////////////////////////////////////

// exports.getData = (req) =>{
//     return new Promise((resolve, reject)=>{
      
//       const actualPeriod = cardcheck.getPeriod(moment());
//       const previousPeriod = getPreviousPeriod(moment());
      
//       const actualHours = [];
//       const previousHours = [];
      
//       let a = actualPeriod.start;
//       let b = actualPeriod.end;
//       let sum = 0;
//       // If you want an exclusive end date (half-open interval)
//       for (let m = moment(a); m.isBefore(b); m.add(1, 'days')) {
//         let value = null;
//         const startOfDay = m.clone().startOf('day');
//         const endOfDay = m.clone().endOf('day');
//         const dayreq = {
//             body: {
//                 idZkTeco: req.body.idZkTeco,
//                 start: startOfDay,
//                 end: endOfDay
//             }
//         };
//         value = await cardcheck.timespent(dayreq);
//         sum += value;
//         actualHours.push(value);
//       }
      
//       const actualData = {
//           start: actualPeriod.start.format("DD/MMM/YYYY"),
//           end: actualPeriod.end.format("DD/MMM/YYYY"),
//           hours: actualHours,
//           totalHours: sum
//       }
      
//       let a = previousPeriod.start;
//       let b = previousPeriod.end;
//       let sum = 0;
//       // If you want an exclusive end date (half-open interval)
//       for (let m = moment(a); m.isBefore(b); m.add(1, 'days')) {
//         let value = null;
//         const startOfDay = m.clone().startOf('day');
//         const endOfDay = m.clone().endOf('day');
//         const dayreq = {
//             body: {
//                 idZkTeco: req.body.idZkTeco,
//                 start: startOfDay,
//                 end: endOfDay
//             }
//         };
//         value = await cardcheck.timespent(dayreq);
//         sum += value;
//         previousHours.push(value);
//       }
      
//       const previousData = {
//           start: previousPeriod.start.format("DD/MMM/YYYY"),
//           end: previousPeriod.end.format("DD/MMM/YYYY"),
//           hours: previousHours,
//           totalHours: sum
//       }
      
      
//       return resolve({ actualData: actualData, previousData: previousData });
//     });
  
//   }; 





///////////////////////////////////////

const getData = async (req) => {

  const actualPeriod = CheckHelper.getPeriod(moment());
  const previousPeriod = getPreviousPeriod(moment());

  const actualHours = [];
  const previousHours = [];
  const actualLabels = [];
  const previousLabels = [];

  let a = actualPeriod.start;
  let b = actualPeriod.end;
  let sum = 0;
  
  for (let m = moment(a); m.isBefore(b); m.add(1, 'days')) {
    let value = null;
    const startOfDay = m.clone().startOf('day');
    const endOfDay = m.clone().endOf('day');
    const dayreq = {
        body: {
            idZkTeco: req.body.idZkTeco,
            start: startOfDay,
            end: endOfDay
        }
    };
    value = await CheckHelper.timespent(dayreq);
    sum += parseFloat(value.hours);
    actualLabels.push(m.format("DD/MMM"));
    actualHours.push(value.hours);
  }

  const actualData = {
      start: actualPeriod.start.format("DD/MMM/YYYY"),
      end: actualPeriod.end.format("DD/MMM/YYYY"),
      labels: actualLabels,
      hours: actualHours,
      totalHours: sum
  }

  a = previousPeriod.start;
  b = previousPeriod.end;
  sum = 0;

  for (let m = moment(a); m.isBefore(b); m.add(1, 'days')) {
    let value = null;
    const startOfDay = m.clone().startOf('day');
    const endOfDay = m.clone().endOf('day');
    const dayreq = {
        body: {
            idZkTeco: req.body.idZkTeco,
            start: startOfDay,
            end: endOfDay
        }
    };
    value = await CheckHelper.timespent(dayreq);
    sum += parseFloat(value.hours);
    previousLabels.push(m.format("DD/MMM"));
    previousHours.push(value.hours);
  }

  const previousData = {
      start: previousPeriod.start.format("DD/MMM/YYYY"),
      end: previousPeriod.end.format("DD/MMM/YYYY"),
      labels: previousLabels,
      hours: previousHours,
      totalHours: sum
  }
  
  

  return { actualData: actualData, previousData: previousData }
}

exports.getData = getData;