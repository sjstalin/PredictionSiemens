import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome";
import Main from "./pages/main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
