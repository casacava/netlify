(function () {
    // PFP text
    let textEntries = ["hey, click me!",
        "do it again!",
        "Hi! I'm Cassie!",
        "I'm a software engineer.",
        "Started out self taught",
        "Now finishing my BS in Software Development",
        "Building awesome websites and software",
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