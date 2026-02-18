function generateLine() {
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    let output = document.getElementById("output");
    let charCount = document.getElementById("charCount");

    if(name === "") {
        output.innerHTML = "Please enter a name 😉";
        return;
    }

    let lines = {
        funny: [
            `Hey ${name}, are you WiFi? Because I’m feeling the connection 😄`,
            `${name}, I promise I’m funnier in person.`,
            `${name}, do you believe in love at first text?`
        ],
        romantic: [
            `${name}, I think my day just got better.`,
            `${name}, you seem worth knowing deeply.`,
            `${name}, let's start something beautiful.`
        ],
        flirty: [
            `${name}, ready for the most fun chat today? 😉`,
            `${name}, I text dangerously smooth.`,
            `${name}, small talk is overrated.`
        ]
    };

    let randomIndex = Math.floor(Math.random() * lines[mood].length);
    let result = lines[mood][randomIndex];

    output.innerHTML = result;
    charCount.innerHTML = "Characters: " + result.length;
}

function copyText() {
    let text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

function generateReply() {
    let incoming = document.getElementById("incoming").value;
    let replyOutput = document.getElementById("replyOutput");

    if(incoming === "") {
        replyOutput.innerHTML = "Paste a message first 😉";
        return;
    }

    let replies = [
        "Haha I like that 😄 Tell me more.",
        "Interesting… now you got my attention.",
        "That’s cute. What’s your next move?",
        "I didn’t expect that, but I like it.",
        "You’re fun already."
    ];

    let randomIndex = Math.floor(Math.random() * replies.length);
    replyOutput.innerHTML = replies[randomIndex];
}

function copyReply() {
    let text = document.getElementById("replyOutput").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}