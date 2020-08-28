import { navigation, dinoModalFormDom } from './javascripts/components/navBar.js'
import {  dinoPush, buildDino } from './javascripts/components/dinoBuildDom.js'
const init = () => {
  navigation();
  dinoModalFormDom();
  dinoPush();
  buildDino();
}

init();