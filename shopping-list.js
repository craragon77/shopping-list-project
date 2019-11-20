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
    
$("ul").on('click', ".shopping-item-toggle", function(event){
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
 })


    //function that deletes the item
$("ul").on('click', ".shopping-item-delete", function(event){
        $(this).closest("li").remove();
})


    




