var handleSubmit = function(event){
  if ( !$('#rat-name').val() ) {
    $('#form_status').text("Name can't be blank!");
    event.preventDefault();
    return false;
  }
}

$(document).ready(function(){
  $('form').on('submit', handleSubmit)
});
