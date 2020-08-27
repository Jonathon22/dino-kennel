const navigation = () => {
  $('#navBar').html(`
 <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">DINO DOCTORY</span>
<a class="btn btn-success btn-lg" role="button" id="add-dino">ADD DINO</a>
    </nav>
  `)
}
const addDinoButton = () =>  {
$('#add-dino').on('click', () => {
dinoModalFormDom();
});
};

const dinoModalFormDom = () => {
  $('#dinoModalFormDom').html(`
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Dino name:</label>
      <input type="text" class="form-control" id="dinoName" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Dino age:</label>
      <input type="text" class="form-control" id="dinoAge" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Dino type:</label>
      <input type="text" class="form-control" id="dinoType" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Owner:</label>
      <input type="text" class="form-control" id="dinoOwner" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Image URL:</label>
      <input type="text" class="form-control" id="dinoImage" aria-describedby="emailHelp">
    </div>
    </form>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary" id="submit-form">Submit</button>
      </div>
    </div>
  </div>
</div>
  `)
}
export { navigation, addDinoButton, dinoModalFormDom }