import './style.css'
import add from './app'

let oDiv = document.createElement('div');
oDiv.innerHTML = '这是一个测试app输出的内容'+add(1,2);
oDiv.className = 'div'
document.body.appendChild(oDiv);