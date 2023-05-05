import React, { useState, useEffect } from "react";

function NameList(props) {
  const [data, setNameList] = useState([]);
  const [prediction, setPrediction] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectedOption);
    console.log(props.data.name);
    fetch("http://localhost:8000/updatePrediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        option: selectedOption,
        fileName: props.data.name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("success");
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.error("Error submitting prediction:", error);
      });
  }

  useEffect(() => {
    // Fetch the data from the Flask backend API
    fetch("http://localhost:8000/output1")
      .then((response) => response.json())
      .then((data) => setNameList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="NameList">
      <div className="card">
        <div>
          <label
            sstyle={{
              fontSize: "14px",
              color: "blue",
              fontStyle: "italic",
            }}
          >
            <b>Prediction Review </b>
          </label>
          <form onSubmit={handleSubmit}>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">---Select----</option>
              <option value="Normal">Normal</option>
              <option value="Defect">Defect</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NameList;
