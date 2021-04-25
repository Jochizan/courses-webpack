import style from './style.css';
import mochi from './assets/mochi5.png';
import yuna from './assets/yuna14.jpg';
import data from './data.json';
import { HelloWorld } from './components/HelloWorld.ts';

// document.getElementById(
// 'app'
// ).innerHTML = `<img src="${mochi}" alt="Mochizou">`;

const d = document;
const $app = d.getElementById('app');
const $h1 = d.createElement('h1');
const $logo = d.createElement('img');
const $img = d.createElement('img');
const $nav = d.createElement('nav');

let menu = '';
let hello = new HelloWorld('Typescript');

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = mochi;
$logo.classList.add('icon');
$img.src = yuna;
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
