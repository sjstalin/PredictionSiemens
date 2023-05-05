import Button from "@mui/material/Button";
import Output from "./output";
import NameList from "./NameList";

import React, { useState } from "react";

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [datas, setData] = useState("");

  let msg;
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setContent(<Output />);
    setContent2(<NameList data={selectedFile} />);
    setShowContent(true);

    if (selectedFile === null) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.prediction);
        setData("Prediction: " + data.prediction);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="upload">
      <div class="container text-center">
        <div class="row">
          <form onSubmit={handleFileUpload}>
            <h2>Upload File</h2>
            <input type="file" onChange={handleFileSelect} />
            <Button variant="contained" type="submit">
              Upload
            </Button>
          </form>
        </div>

        <div class="row">
          <div class="col">{content}</div>
        </div>
        <div class="row">
          <div class="col">
            <h2>{datas}</h2>
          </div>
          <div class="col">{content2}</div>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
