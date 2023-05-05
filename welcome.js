import "../App.css";
import Head from "../components/head";

function Welcome() {
  return (
    <div className="App">
      <Head />
      <section className="image-section">
        <div className="image-section--container">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2148999829.jpg"
            alt="An example image"
            className="image-section--image"
          />
          <h2 className="image-section--text">
            {" "}
            <div class="container">
              <h1>
                <span class="word12">
                  Image<span class="superscript"></span>{" "}
                </span>
                <span class="word12">Prediction Analyzer</span>
                <a href="/Main"></a>
              </h1>
            </div>
          </h2>
        </div>
        <div className="image-section--buttons"></div>
      </section>
    </div>
  );
}

export default Welcome;
