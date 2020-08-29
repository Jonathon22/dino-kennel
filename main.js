import { navigation, dinoModalFormDom } from './javascripts/components/navBar.js'
import {  buildDinoCards } from './javascripts/components/buildDinoCard.js'
import { dinos } from './data/helpers/dinoData.js';
const init = () => {
  navigation();
  dinoModalFormDom();
  buildDinoCards(dinos);
}

init();