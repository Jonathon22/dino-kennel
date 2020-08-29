import { buildDinoCards } from './buildDinoCard.js'

const feedDino = (index, item, array) => {
  $(`#feed${index}`).click(() => {
    item.health += 1;
    buildDinoCards(array);
  })
}

const petDino = (index, item, array) => {
  $(`#pet${index}`).click(()=> {
    item.health += 2;
    buildDinoCards(array);
  })
}

const adventureDino = (index, item, array) => {
  $(`#adventure${index}`).click(()=> {
    item.health -= 5;
    buildDinoCards(array);
  })
}

const deleteDino = (index, array) => {
  $(`#delete${index}`).click(()=> {
    array.splice(index, 1)
    buildDinoCards(array)
  })
}

export { feedDino, petDino, adventureDino, deleteDino }