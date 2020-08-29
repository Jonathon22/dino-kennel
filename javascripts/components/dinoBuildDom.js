

const buildDino = (item, index) => {
  return ` <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="">
    <div class="card-body">
      <p class="card-text">${item.name}</p>
    </div>
    <div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${item.health} 25%"aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="d-fex justify-content-around m-2 mt-3">
  <button type="button" id="feed${index}" class="btn btn-secondary">Feed</button> 
  <button type="button" id="pet${index}" class="btn btn-dark">Pet</button> 
  </div>
  <div class="d-fex justify-content-around m-2 mt-3">
  <button type="button" id="info${index}" class="btn btn-warning">Adventure</button>
  <button type="button" id="delete${index}" class="btn btn-danger">Delete</button>
  </div>
  </div>`
  }
  



  export { buildDino  }