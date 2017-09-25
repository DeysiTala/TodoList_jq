function addTodoItem() {
  var todoItem = $("#new-to-do-item").val();
  $("#to-do-list").append("<li><input type='checkbox'" + 
                         " name='to-do-item-done'" + 
                         " class='to-do-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button type='button' class='to-do-item-delete close' aria-label='Close'>"+
                         "<span aria-hidden='true'>&times;</span></button></li>");
  /*<button type="button" class="close" aria-label="Close">
  <span aria-hidden='true'>&times;</span>
</button>*/
 $("#new-to-do-item").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}

                           
function completeTodoItem() {  
  $(this).parent().toggleClass("strike");
}


$(function() {
 
   $("#add-to-do-item").on('click', function(e){
     e.preventDefault();
     addTodoItem()
   });
  
  $("#to-do-list").on('click', '.to-do-item-delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  $(document).on('click', ".to-do-item-done", completeTodoItem)

});