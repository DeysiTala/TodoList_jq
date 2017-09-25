function addToDo() {
    var to_do = $("#new-to-do-item").val();
    $("#to-do-list").append("<li><input type='checkbox'" +
        " name='to-do-item-done'" +
        " class='to-do-item-done'" +
        " value='" + to_do + "' /> " +
        to_do +
        " <button type='button' class='to-do-item-closer close text-center btn btn-danger' aria-label='Close'>" +
        "<span aria-hidden='true'>&times;</span></button></li>");
    /*<button type="button" class="close" aria-label="Close">
  <span aria-hidden='true'>&times;</span>
</button>*/
    $("#new-to-do-item").val("");
}

function closeX(e, item) {
    e.preventDefault();
    $(item).parent().fadeOut('slow', function() {
        $(item).parent().remove();
    });
}

function completeToDo() {
    $(this).parent().toggleClass("strike");
}

$(function() {

    $("#add-to-do-item").on('click', function(e) {
        e.preventDefault();
        addToDo()
    });

    $("#to-do-list").on('click', '.to-do-item-closer', function(e) {
        var item = this;
        closeX(e, item)
    })

    $(document).on('click', ".to-do-item-done", completeToDo)

});