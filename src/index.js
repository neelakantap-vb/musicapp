import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = [
  {id:1, like:3, title: "Com Truise - Flightwave", subtitle: 'Reed', media:''},
  {id:2, like:3, title: "Claude Debussy - Clair de lune", subtitle: 'Reed', media:''},
  {id:3, like:2, title: "Culture Shock - Troglodyte", subtitle: 'Doug', media:''},
  {id:4, like:2, title: "Tycho - Montana", subtitle: 'Reed', media:''}
]

ReactDOM.render(
    <App musics={data} />,
  document.getElementById('root')
);
