(function () {
    // When you click on your PFP, your PFP will interact and say something. Make a list for it to say!
    let textEntries = ["hey, click me!",
        "do it again!",
        "~clears throat~",
        "Hi! I'm Cassie!",
        "I'm a software engineer.",
        "Started out self taught",
        "Now have a BS in Software Development",
        "Building awesome websites and software with #100devs.",
        "Nice to meet you!",
    ];

    let index = 0;
    const bubbleTextElement = document.querySelector(".mainTextBox");
    bubbleTextElement.style.display = "block";
    function nextTextForBubble() {
        textEntries[index] && (bubbleTextElement.innerText = textEntries[index]);
        index++;
    }
    nextTextForBubble();
    
    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(i=>i.addEventListener("click", function (e) {
        nextTextForBubble();
    }));
}());