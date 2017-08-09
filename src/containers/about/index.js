import React from 'react'
import spilling from './spilling.jpg';
import kaffekopp from './kaffekopp.jpg';

export default () => (
  <article id="omoss">
    <h2 className="major">Om Oss</h2>
    <span className="image main"><img src={kaffekopp} alt=""/></span>
    <p>Oslo Flipperspillklubb er en forening stiftet av flipperentusiaster i januar 2015, med formål å fremme
      interesse og engasjement for flipperspill for medlemmer og interesserte i Oslo</p>
    <p>Vi holder til i et flott kontorlokale på Alna med 20+ flippermaskiner, hvor medlemmer og besøkende
      møtes
      for hyggelig sosialt samvær, og for å spille, konkurrere og vedlikeholde verdens kuleste spill.</p>
    <span className="image main"><img src={spilling} alt=""/></span>
  </article>
);
