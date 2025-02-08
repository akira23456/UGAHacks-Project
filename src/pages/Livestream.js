import React, { useEffect, useState } from "react";

const Livestream = () => {
  const [livestream, setLivestream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching livestream from API...");
    fetch("http://localhost:5035/api/livestream")
      .then(response => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          throw new Error(`Failed to load livestream. Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Livestream Data:", data);
        setLivestream(data);
      })
      .catch(error => {
        console.error("Error fetching livestream:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Livestream</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {livestream ? (
        <div>
          <h2>{livestream.title}</h2>
          <iframe
            width="800"
            height="450"
            src={livestream.publicPreviewUrl} // ✅ Uses the correct embed URL
            title="Livestream"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Loading livestream...</p>
      )}

      <section id="Buttons">
        <button>Reels</button>
        <button>Streaming</button>
        <button>WebChat</button>
      </section>

    </div>
  );
};

export default Livestream;
