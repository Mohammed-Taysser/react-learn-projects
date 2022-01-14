import React from "react";

const season_config = {
  'winter': {
    'text': 'Winter is come',
    'icon': 'far fa-snowflake'
  },
  'summer': {
    'text': 'Summer is here',
    'icon': 'fas fa-sun'
  }
}

const get_season = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = get_season(props.latitude, new Date().getMonth());
  const { text, icon } = season_config[season];
  return (
    <div>
      <div className="icon">
        <i className={`display-1 ${icon}`}></i>
      </div>
      <h1 className='text-center'> {text} </h1>
      <div className="icon text-end">
        <i className={`display-1 ${icon}`}></i>
      </div>
    </div>
  )
}

export default SeasonDisplay;
