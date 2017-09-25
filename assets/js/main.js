function addTodoItem() {
  var todoItem = $("#new-to-do-item").val();
  $("#to-do-list").append("<li><input type='checkbox'" + 
                         " name='to-do-item-done'" + 
                         " class='to-do-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button class='to-do-item-delete'>"+
                         "Delete</button></li>");
  
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
  
//EVENT DELEGATION
//#todo-list is the event handler because .todo-item-delete doesn't exist when the document loads, it is generated later by a todo entry
//https://learn.jquery.com/events/event-delegation/
  $("#to-do-list").on('click', '.to-do-item-delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  $(document).on('click', ".to-do-item-done", completeTodoItem)

});