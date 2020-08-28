import { dinoModalFormDom } from './navBar.js'
import { dinos, getDinos } from '../../data/dinoData.js';


const submitButtonClick = () => {
  $(`#submit-button`).on('click', buildDino
)}
const dinoPush = () => {
  let dino = { 
    name: $('#dinoName').val(),
    owner: $('#dinoOwner').val(),
    age: $('#dinoAge').val(),
    type: $('#dinoType').val(),
    image: $('#dinoImage').val(),
  };
  getDinos().push(dino);
}

const buildDino = (dino) => {
  let domString = `
    <div class="card" style="width: 18rem;">
    <img src="${dino.image}" class="card-img-top" alt="${dino.name}>
    <div class="card-body">
      <p class="card-text">${dino.name}</p>
    </div>
    <div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="d-fex justify-content-around m-1 mt-2">
  <button type="button" class="btn btn-secondary">Secondary</button> 
  <button type="button" class="btn btn-dark">Dark</button> 
  </div>
  <div class="d-fex justify-content-around m-1 mt-2">
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  </div>
  </div>`
  
  submitButtonClick();
  domString();
}



  export { submitButtonClick, dinoPush, buildDino }