function talk() {
    let know = {
        "hi" : "hello there, Need help?",
        "who are you?" : "I am Kira, The Savior Chatbot!",
        "what's your name?" : "My name is Kira. I am the Savior Chatbot! Remember, my name is Kira!",
        "ok" : "ok! nice to meet you.",
        "what?" : "What??",
        "how are you?" : "As you can see, I'm not dead.",
        "bye" : "see you later. Do visit again!",
        "hey" : "yo 'ssup?"
    };

    let typed = document.getElementById('userTyping').value;

    document.getElementById('showQstn').innerHTML = typed;

    if (typed in know) {
        document.getElementById('showAns').innerHTML = know[typed];
        document.getElementById('userTyping').value = "";
    } else if (typed == "") {
        document.getElementById('showAns').innerHTML = "You didn't type anything!";
        document.getElementById('userTyping').value = "";
    } else if (typed == "clear") {
        document.getElementById('showAns').innerHTML = "";
        document.getElementById('showQstn').innerHTML = "";
        document.getElementById('userTyping').value = "";
    } else {
        document.getElementById('showAns').innerHTML = "Sorry! I didn't understand. <br>";
        document.getElementById('userTyping').value = "";
    }
}