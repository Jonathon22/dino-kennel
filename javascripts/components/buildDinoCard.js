import { buildDino } from './dinoBuildDom.js';
import { dinoModalFormDom } from './navBar.js';


const buildDinoCards = (array) => {
  $('#kennel-dino').html('');
  $('#hospital-dino').html('');
  $('#gravyard-dino').html('');
  array.forEach((item, index) => {
    if (item.health >= 75) {
    $('#kennel-dino').append(buildDino(item, index));
    } else if (item.health < 75 && item.health > 0 || item.health < 75 && item.age >= 100) {
      $('#hospital-dino').append(buildDino(item, index));
    } else if ( item.health === 0) {
      $('#graveyard-dino').append(buildDino(item,index));
    }
    dinoModalFormDom();
  });
}

export { buildDinoCards }