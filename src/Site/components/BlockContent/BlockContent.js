import React from 'react';
import './BlockContent.css';

function BlockContent({cssClass, colOne, colTwo}) {
  return (
    <div className={cssClass}>
      <div className="row-column_one">
        {colOne}
      </div>
      <div className="row-column_two">
        {colTwo}
      </div>
    </div>
  );
}

export default BlockContent;