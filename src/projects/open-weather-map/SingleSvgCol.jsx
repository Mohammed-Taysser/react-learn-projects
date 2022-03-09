import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

function SingleSvgCol(props) {
  let average =
    props.data.reduce((total, current) => total + current, 0) /
    props.data.length;

  return (
    <td >
      <Sparklines data={props.data} svgWidth={250} svgHeight={100}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='mean' />
      </Sparklines>
      <p className='m-0'>{`${Math.round(average)} ${props.unit}`}</p>
    </td>
  );
}

SingleSvgCol.defaultProps = {
  color: 'red',
};

export default SingleSvgCol;
