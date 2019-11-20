//function to add the item to the list

$("#js-shopping-list-form").find("button").click(function(event) {
    event.preventDefault();
    $(".shopping-list").append(
        `<li>
        <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )
})

//function that makes the thing disappear when the dissapear button is clicked
    
$(".shopping-item-toggle").click(function(event){
    $(this).parent(
        $(".shopping-item").toggleClass("shopping-item__checked") )
 })


    //function that deletes the item
$(".shopping-item-delete").click(function(event){
        $(this).parent(
            ("li").remove()
        )
})



/* $("shopping-list-delete").click(function(event) {
    event.stopPropagation();
    list.find(".shopping-item, li").remote();
}) */


    




