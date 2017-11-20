 import _ from 'lodash';
 import './style.less';
 import './style.css';
 import Icon from './icon.png';
 import Data from './data.xml';

 function component() {
     var element = document.createElement('div');
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     element.classList.add('hello');
     element.classList.add('lessFont');
     document.body.appendChild(element);
     var element1 = document.createElement('div');
     element1.innerHTML = JSON.stringify(Data);
     document.body.appendChild(element1);
 }
 component();