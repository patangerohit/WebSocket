# 🗨️ Spring Boot WebSocket Chat App

A simple real-time chat application built using **Spring Boot**, **WebSocket**, and **Thymeleaf**. Users can enter a username and start sending messages, which are displayed live on the same page without reloads.

## 🚀 Features

- Real-time messaging using WebSocket
- Simple username-based login (no password/auth for demo)
- Frontend rendered using Thymeleaf
- Live message updates on the same page
- Clean, minimal UI


## 🛠️ Tech Stack

- **Java 17+**
- **Spring Boot**
- **Spring WebSocket**
- **Thymeleaf**
- **HTML/CSS/JavaScript**

  
⚙️ How to Run

Clone the repo
git clone https://github.com/patangerohit/WebSocket.git
cd websocket

Run the application
Using Maven:
./mvnw spring-boot:run
Or using an IDE like IntelliJ/Eclipse, run the WebSocketChatApplication class.

Open in browser
Go to: http://localhost:8080

Start chatting!😊

-Enter a username
-Type a message and see it update in real-time

🧠 How It Works

-When the user enters their name, it's stored in session or passed via the WebSocket session.

-The frontend establishes a WebSocket connection to the server.

-Messages sent by users are broadcasted to all connected clients.

-The page dynamically updates the message list using JavaScript.
