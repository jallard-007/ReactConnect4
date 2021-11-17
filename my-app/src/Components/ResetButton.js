import React from 'react';
import ClearBoard from '../ClearBoard.js';

const ResetButton = (props) => {
  return (
    <div>
      <button type='button' className='btn btn-danger' onClick={() => ClearBoard(props.SetBoard)}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
