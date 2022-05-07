import doSomething from './module';
import './babel';
import './styles/style.scss';
import image from './assets/images/WPpng.png';
import svg from './assets/icons/animal-carnivore-cartoon-2-svgrepo-com.svg';

doSomething();

const unUsed = 12;

console.log('Hello World!');

function createEl() {
  const el = document.createElement('div');
  el.textContent = 'Element from TS';
  el.className = 'style';
  document.body.appendChild(el);
}

createEl();

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

const div = document.createElement('div');
div.innerHTML = svg;
document.body.appendChild(div);
