import React, { useState } from "react";

function Shorts() {
  // Video URLs from YouTube
  const videoUrls = [
    "https://www.youtube.com/watch?v=Mov1WR0NOEM",
    "https://www.youtube.com/watch?v=-0i_OesFzoE",
    "https://www.youtube.com/watch?v=W6RR-io_-cM",
    "https://www.youtube.com/watch?v=1ZOQb4aEzpk",
    "https://www.youtube.com/watch?v=xikCSoRHImk", // Updated with the new video
  ];

  // State to store the current video URL
  const [currentVideo, setCurrentVideo] = useState(videoUrls[0]);

  // Handle video change when a button is clicked
  const handleVideoChange = (url) => {
    setCurrentVideo(url);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shorts</h1>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {/* Display video from current URL */}
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${currentVideo.split('v=')[1]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Buttons to change video */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={() => handleVideoChange(videoUrls[0])}>Shorts 1</button>
        <button onClick={() => handleVideoChange(videoUrls[1])}>Shorts 2</button>
        <button onClick={() => handleVideoChange(videoUrls[2])}>Shorts 3</button>
        <button onClick={() => handleVideoChange(videoUrls[3])}>Shorts 4</button>
        <button onClick={() => handleVideoChange(videoUrls[4])}>Shorts 5</button>
      </div>
    </div>
  );
}

export default Shorts;
