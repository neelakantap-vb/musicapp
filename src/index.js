import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = [
  {id:1, like:3, title: "Com Truise - Flightwave", subtitle: 'Reed', media:'', liked: false},
  {id:2, like:3, title: "Claude Debussy - Clair de lune", subtitle: 'Reed', media:'', liked: false},
  {id:3, like:2, title: "Culture Shock - Troglodyte", subtitle: 'Doug', media:'', liked: true},
  {id:4, like:2, title: "Tycho - Montana", subtitle: 'Reed', media:'', liked: true}
]

ReactDOM.render(
    <App musics={data} />,
  document.getElementById('root')
);
