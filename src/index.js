/*global fetch*/
import React from 'react'
import {render} from 'react-dom'
import Home from './containers/home'
import 'babel-polyfill';
import './index.css'

render(<Home/>, document.querySelector('#root'));
