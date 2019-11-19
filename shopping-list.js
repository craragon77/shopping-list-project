//function to add the item to the list


$("#js-shopping-list-form").find("button").click(function(event) {
    event.preventDefault();
    $(".shopping-list").append("<li>",$("#shopping-list-entry"))
})
    
    
    
    
    
    
//function that makes the thing disappear when the dissapear button is clicked
    
    
    
/* const list = $(".shopping-list");
    $(".shopping-item-toggle").click(function(event) {
    $(event.currentTarget).addClass(".shopping-item__checked");
    });
    
    
    //function that deletes the item
$("shopping-list-delete").click(function(event) {
    event.stopPropagation();
    list.find(".shopping-item, li").remote();
}) */
    




