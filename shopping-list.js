//function to add the item to the list
$(function() {
$("#js-shopping-list-form").on('click', 'li', function(event){
    event.preventDefaultBehavior();
    $("shopping-list").append("<li>")
});






//function that makes the thing disappear when the dissapear button is clicked



const list = $(".shopping-list")
    $(".shopping-item-toggle").click(function(event) {
        event.currentTarget();
    list.find(".shopping-item").toggle("shopping-item__checked");
});



//function that deletes the item
$("shopping-list-delete").click(function(event) {
    event.stopPropagation();
    list.find(".shopping-item").remote()
})

});