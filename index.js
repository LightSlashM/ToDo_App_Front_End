console.log("Hello World");
/*
$(document.ready(function(){
    $("u1").on("click",input[type="checkbox"],function()
        {$(this).closest("li").toggleClass("completed-todo") })
}))
*/


//$(document).ready(console.log("My life is a lie"));
    
/*
$(document).ready(function({ 
    console.log("im ready");
    $("#add-todo-btn").click(function(){
     console.log("button functions are up to code")
    })
}
)
)
*/
$(document).ready(function(){
    $(".material-icons").hide()
    console.log("Im ready")
    $("#add-todo-btn").click(function(){
        console.log("Buttons are now functional")
        var nameOfTodo =$("#new-todo-name").val();
        var timeOfTodo =$("#new-todo-days").val();
        console.log(nameOfTodo)
        console.log(timeOfTodo)

        $("ul").append("<li> <input type='checkbox' class='check'><a href='show.html' style='text-decoration:none'> "+nameOfTodo+" </a><span class='day-est'>"+timeOfTodo+" day(s)</span></li>")
            })
            $("ul").on("click","input[type='checkbox']",function(){
        $(this).closest("li").toggleClass("completed-todo")
        
            })
            $("li").hover(function(){$(".material-icons").show();},
                   function(){$(".material-icons").hide();});

                    
})
