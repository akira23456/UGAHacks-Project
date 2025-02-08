import React, { useState, useEffect } from "react";

function Shorts() {
  const [videos, setVideos] = useState([]);

  // Fetch videos from Django API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/videos/")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div>
      <h1>Shorts</h1>
      {videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        videos.map((video) => (
          <div key={video.id}>
            <video controls width="400">
              <source
                src={`https://gateway.pinata.cloud/ipfs/${video.ipfs_cid}`}
                type="video/mp4"
              />
            </video>
            <p>{video.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Shorts;
