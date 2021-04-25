import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import mochi from './assets/mochi5.png';
import yuna from './assets/yuna14.jpg';
import data from './data.json';
import HelloWorld from './components/HelloWorld.jsx';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld name='React' logo={mochi} img={yuna} menu={data.links} />
  </React.StrictMode>,
  document.getElementById('app')
);
