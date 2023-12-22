const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false );

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += "<div class='user-message'>" + userInput + "</div>";

    // Array of possible bot responses
    var botResponses = [
        "Thanks Bhai......!!!",
        "Got it Bhai...!",
        "Great!",
        "Awesome!",
        "Nice to hear from you!",
        "How can I assist you further?"
    ];

    // Simulate a random response from the chatbot
    setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * botResponses.length);
        chatDisplay.innerHTML += "<div class='bot-message'>" + botResponses[randomIndex] + "</div>";
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

