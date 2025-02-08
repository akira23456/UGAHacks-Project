import React, { useState } from "react";

function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div>
      <section id="Splash"> 
        Performing Heritage
        <img src="src/resources/images/logoph.png"></img>
      </section>
      <section id="ContentArea">
      </section>

      <h2>Live Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>

      <section id="Buttons">
        <button>
          <a href="./Reels.html">Reels</a>
        </button>
        <button>Streaming</button>
        <button>WebChat</button>
      </section>

    </div>
  );
}

export default Home;
