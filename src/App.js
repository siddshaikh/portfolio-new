import "./App.css";
import Main from "./pages/Main";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Main />
    </div>
  );
}

export default App;
