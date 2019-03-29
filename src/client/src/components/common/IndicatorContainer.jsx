import React from 'react';
import InfoBox from './InfoBox';
import clock from '@material-ui/icons/AccessTime'


const IndicatorContainer = ({ indicators }) => {
  let content = [];
  indicators.forEach ((indicator, key) => {
    content.push(
      <div key={key} className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <InfoBox
          Icon={clock}
          color={indicator.backgroundColor}
          title= {indicator.title}
          value={indicator.value}
        />
      </div>);
  });

  return (
    <div className="row">
      {content}
    </div>
  );
}

export default IndicatorContainer;

