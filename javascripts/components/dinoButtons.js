import { buildDinoCards } from './buildDinoCard.js'

const feedDino = (index, item, array) => {
  $(`#feed${index}`).click(() => {
    item.health += 1;
    buildDinoCards(array);
  })
}

export { feedDino }