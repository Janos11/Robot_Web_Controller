// WebSocket for robot movement
const socket = new WebSocket("ws://192.168.1.189:8787");
const responseDiv = document.getElementById("response");

socket.onopen = () => {
    console.log("WebSocket connected");
    responseDiv.className = "response success";
    responseDiv.innerHTML = "✅ Connected to WebSocket";
};

socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    responseDiv.className = "response error";
    responseDiv.innerHTML = "❌ WebSocket connection error";
};

socket.onmessage = (event) => {
    console.log("Server says:", event.data);
    responseDiv.className = "response success";
    responseDiv.innerHTML = `<strong>Server:</strong> ${event.data}`;
};

function sendCommand(direction) {
    if (socket.readyState === WebSocket.OPEN) {
        console.log(`Sending command: ${direction}`);
        socket.send(direction);
        responseDiv.className = "response loading";
        responseDiv.innerHTML = `➡️ Command sent: <strong>${direction}</strong>`;
    } else {
        alert("WebSocket not connected!");
        responseDiv.className = "response error";
        responseDiv.innerHTML = "❌ WebSocket not connected!";
    }
}

// Map keyboard to robot commands
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowUp":
            sendCommand("forward");
            break;
        case "ArrowDown":
            sendCommand("backward");
            break;
        case "ArrowLeft":
            sendCommand("left");
            break;
        case "ArrowRight":
            sendCommand("right");
            break;
        case "a":
            sendCommand("rotate_left");
            break;
        case "d":
            sendCommand("rotate_right");
            break;
    }
});


// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

// Menu side bar
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
