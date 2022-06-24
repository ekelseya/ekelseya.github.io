let visitor
let todoList

//Set Background with random image from unsplash
const setBackground = () => {
    fetch(`https://source.unsplash.com/1600x900/?wunderlust`)
        .then((response)=> {
            document.body.style.background = `url("${response.url}")`;
        })
}

//Set name
const setName = () => {
    if (localStorage.getItem('name') !== null) {
        visitor = localStorage.getItem('name');
        $('#temp').remove();
    }
}

//Set greeting
const setGreeting = () => {
    const today = new Date()
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' }
    const curHr = today.getHours()

    setName();

    if (visitor !== undefined) {
        if (curHr < 12) {
            document.getElementById("greeting").innerHTML = "Good morning, " + visitor + "!"
        } else if (curHr < 18) {
            document.getElementById("greeting").innerHTML = "Good afternoon, " + visitor + "!"
        } else {
            document.getElementById("greeting").innerHTML = "Good evening, " + visitor + "!"
        }
    }

    document.getElementById("date").innerText =`${today.toLocaleDateString(undefined, dateOptions)}`
    document.getElementById("time").innerText = `${today.toLocaleTimeString('en-US', timeOptions)}`;
}

//Set name and greeting on load
const setOnLoad = () => {
    setName();
    setGreeting();
}

window.onload = setOnLoad();

setInterval(setGreeting, 60000);

setInterval(setBackground, 300000);


//Add new to do from input box with enter press
$("input[id='temp']").keypress(function(event){
    //Note: 'enter' keypress = 13
    if(event.which === 13){
        visitor = $(this).val();
        localStorage.setItem('name', visitor)
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        setName();
    }
});

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
$("input[id='todo']").keypress(function(event){
    //Note: 'enter' keypress = 13
    if(event.which === 13){
        let newTodoText = $(this).val();
        $("#list").prepend("<div class='new-to-do'><div class='delete'><i class='far fa-trash-alt'></i></div><div class='text'> " + newTodoText + "</div></div>");
        $(this).val("");
    }
});

//Change placeholder text on focus
$("input[id='todo']").focus(function() {
    $(this).attr("placeholder", "  Type your to-do item here");
});

//Change placeholder text on off focus
$("input[id='todo']").focusout(function() {
    $(this).attr("placeholder", "  What do you have planned today?");
});
