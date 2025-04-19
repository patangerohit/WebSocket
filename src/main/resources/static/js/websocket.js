let socket = new WebSocket("ws://localhost:8081/ws");

socket.onmessage = function (event) {
    let chat = document.getElementById("chat");
    let message = document.createElement("div");
    message.textContent = event.data;
    chat.appendChild(message);
};

function sendMessage() {
    let username = document.getElementById("username").value.trim();
    let input = document.getElementById("msg");

    if (username === "") {
        alert("Please enter a username!");
        return;
    }

    const payload = {
        user: username,
        message: input.value
    };

    socket.send(JSON.stringify(payload));
    input.value = "";
}
