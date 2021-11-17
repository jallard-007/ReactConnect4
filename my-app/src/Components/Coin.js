import React from 'react';

function Coin(slot) {
  let defaultClass = 'coin';
  if (slot.value === 1) {
    defaultClass += ' coinPlayer';
  } else if (slot.value === 2) {
    defaultClass += ' coinComp';
  }
  return <div className={defaultClass}></div>;
}

export default Coin;
