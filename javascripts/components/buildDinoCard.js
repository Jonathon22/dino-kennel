import { buildDino } from './dinoBuildDom.js';
import { dinoModalFormDom } from './navBar.js';
import { feedDino, petDino, adventureDino, deleteDino } from './dinoButtons.js';


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
    feedDino(index, item, array)
    petDino(index,item, array)
    adventureDino(index,item, array)
    deleteDino(index, array)
  });
}

export { buildDinoCards }