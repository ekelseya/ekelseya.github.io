//Set Background with random image from unsplash
const setBackground = () => {
    fetch(`https://source.unsplash.com/1600x900/?wunderlust`)
        .then((response)=> {
            document.body.style.background = `url("${response.url}")`;
        })
}
setBackground();

//Set greeting
const today = new Date()
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric' }
const curHr = today.getHours()

if (curHr < 12) {
    document.getElementById("greeting").innerHTML = "Good morning, Eryn!"
} else if (curHr < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon, Eryn!"
} else {
    document.getElementById("greeting").innerHTML = "Good evening, Eryn!"
}

document.getElementById("date").innerText =`${today.toLocaleDateString(undefined, dateOptions)}`
document.getElementById("time").innerText = `${today.toLocaleTimeString('en-US', timeOptions)}`;


//Mark to do as completed
//Set .on listener to existing element ("#container") then on
//elements added through user input
$("#container").on("click", ".text", function(){
    $(this).toggleClass("completed");
});

//Remove to do with delete class
$("#container").on("click", ".delete", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new to do from input box with enter press
$("input[type='text']").keypress(function(event){
    //Note: 'enter' keypress which = 13
    if(event.which === 13){
        let newTodoText = $(this).val();
        $("#list").prepend("<div class='new-to-do'><div class='delete'><i class='far fa-trash-alt'></i></div><div class='text'> " + newTodoText + "</div></div>");
        $(this).val("");
    }
});

//Change placeholder text on focus
$("input[type='text']").focus(function() {
    $(this).attr("placeholder", "Type your to-do item here");
});

//Change placeholder text on off focus
$("input[type='text']").focusout(function() {
    $(this).attr("placeholder", "What do you have planned today?");
});
