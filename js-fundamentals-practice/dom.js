const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorius text-content!';
container.appendChild(content);

const paraRed = document.createElement('p');
paraRed.classList.add('para');
paraRed.textContent = `Hey I'm red!`;
paraRed.style.cssText = 'color: red';
container.appendChild(paraRed);

const headBlue = document.createElement('h3');
headBlue.classList.add('head');
headBlue.textContent = `I'm blue!`;
headBlue.style.cssText = `color: blue`;
container.appendChild(headBlue);

const contentSecond = document.createElement('div');
contentSecond.classList.add('content-2');
contentSecond.style.border = `1px solid black`
contentSecond.style.borderColor = 'black';
contentSecond.style.backgroundColor = 'pink';

const divHead = document.createElement('h1');
divHead.classList.add('div-heading');
divHead.textContent = `I'm on a div`;
container.appendChild(divHead);

const divPara = document.createElement('p');
divPara.textContent = `ME TOO`;
container.appendChild(divPara);

container.appendChild(contentSecond);

