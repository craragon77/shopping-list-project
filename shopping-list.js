//function to add the item to the list
function list() {

const buttonClass = $(".js-shopping-list-form");
buttonClass.find("button").click(function(event) {
    event.preventDefault();
    $(".shopping-item").append().text();
    });
    
    
    
    
    
    
//function that makes the thing disappear when the dissapear button is clicked
    
    
    
const list = $(".shopping-list");
    $(".shopping-item-toggle").click(function(event) {
    this.addClass(shopping-item__checked);
    });
    
    
    //function that deletes the item
$("shopping-list-delete").click(function(event) {
    event.stopPropagation();
    list.find(".shopping-item").remote();
})
    
}