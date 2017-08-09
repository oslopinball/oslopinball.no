import React from 'react'
import bilde from './styret.jpg';

export default () => (
  <article id="contact">
    <h2 className="major">Bli Medlem</h2>
    <span className="image main"><img src={bilde} alt=""/></span>
    <p>Som medlem får du rabattert besøks- og turneringsavgift, gratis medlemstreff på klubbhuset og leie av
      klubbhus til rabattert pris.</p>

    <p>Medlemsskap koster 200,- pr kalenderår (medlemmer under 26 år betaler 50,-)</p>
    <a href="https://n4f.hypersys.no/forms/innmeldingsskjema-oslo-flipperspillklubb/" target="_blank"
       rel="noopener noreferrer">
      Skjema for innmelding</a>
  </article>
);
