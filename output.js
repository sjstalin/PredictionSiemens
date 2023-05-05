import React, { useState, useEffect } from "react";

function Output() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Output--div">
      {images.map((image) => (
        <div key={image.name}>
          <img
            className="output--image"
            src={`data:image/png;base64,${image.data}`}
            alt={image.name}
          />
          <b>
            <p>{image.name}</p>
          </b>
        </div>
      ))}
    </div>
  );
}

export default Output;
