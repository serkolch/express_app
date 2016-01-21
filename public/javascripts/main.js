$('form').on('submit',function(){
  if ($('#rat-name').val()===''){
    event.preventDefault();
    $('#form_status').text("Name can't be blank!")
  }
})