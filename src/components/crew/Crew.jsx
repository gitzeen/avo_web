import React from 'react'
import { crew1, crew2, crew3, crew4, crew5 } from './imports';
import './crew.css';

const Crew = () => {
  return (
    <div className="avo__crew section__padding" id="crew">
      <div className="avo__crew-heading">
        <p>Wanna Listen to our stories?</p>
      </div>
      <div className="avo__crew-container">
        <div className="avo__crew-container_groupA">
          <div className="grid1 crew1"><img src={crew1} alt="crew1"/></div>
          <div className="grid1 crew2"><img src={crew2} alt="crew2"/></div>
          <div className="grid1 crew3"><img src={crew3} alt="crew3"/></div>
          <div className="grid1 crew4"><img src={crew4} alt="crew4"/></div>
          <div className="grid2 crew5"><img src={crew5} alt="crew5"/></div>
        </div>
      </div>
    </div>
  )
}

export default Crew