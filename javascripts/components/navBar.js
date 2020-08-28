const navigation = () => {
  $('#navBar').html(`
 <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">DINO DOCTORY</span>
    </nav>
  `);
}

const dinoModalFormDom = () => {
  $('#dinoModalFormDom').html(`
  <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">ADD DINO</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="text" id="dinoName" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email">Dino Name:</label>
        </div>

        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="text" id="dinoAge" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Dino Age:</label>
        </div>
       
        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="text" id="dinoType" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Dino Type:</label>
        </div>
          
        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="text" id="dinoOwner" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Owner:</label>
        </div>
          
        <div class="md-form mb-4">
            <i class="fas fa-lock prefix grey-text"></i>
            <input type="textd" id="dinoImage" class="form-control validate">
            <label data-error="wrong" data-success="right" for="defaultForm-pass">Image URL</label>
          </div>
         
          <div class="md-form mb-4">
              <i class="fas fa-lock prefix grey-text"></i>
              <input type="textd" id="dinoHealth" class="form-control validate">
              <label data-error="wrong" data-success="right" for="defaultForm-pass">Health (0-100)</label>
            </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
      <a class="btn btn-success btn-lg" role="button" id="submit-dino">SUBMIT</a>
      </div>
    </div>
  </div>
</div>

<div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">ADD YOUR DINO HERE</a>
</div>
  `)
}


export { navigation, dinoModalFormDom }