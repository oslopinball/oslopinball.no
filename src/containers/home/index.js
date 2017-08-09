import React from 'react';
import About from '../about'
import News from '../news'
import Contact from '../contact'
import Elements from '../elements'

export default () => (
  <div>
    <div id="wrapper">
      <header id="header">
        <div className="content">
          <div className="inner">
            <h1>Oslo Pinball Club</h1>

            <p>Flipper, mekking, retrospill og brettspill</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#aktuelt">Aktuelt</a></li>
            <li><a href="#omoss">Om oss</a></li>
            <li><a href="#contact">Bli medlem</a></li>
          </ul>
        </nav>
      </header>
      <div id="main">
        <About/>
        <News/>
        <Contact/>
        <Elements/>
      </div>
      <footer id="footer">
        <ul className="icons">
          <li><a href="https://twitter.com/oslopinball" className="icon fa-twitter"><span
            className="label">Twitter</span></a></li>
          <li><a href="https://www.facebook.com/oslopinball" className="icon fa-facebook"><span
            className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/oslopinballclub" className="icon fa-instagram"><span className="label">Instagram</span></a>
          </li>
        </ul>
        <p className="copyright">&copy; Oslo Flipperspillklubb | Oslo Pinball Club | Org.nr: 914 838 789</p>
        <p className="copyright">Alle bilder &copy; Lars Eivind Bones / Dagbladet. Design: <a href="https://html5up.net">HTML5
          UP</a>.</p>
      </footer>
    </div>
    <div id="bg"/>
  </div>
);
