import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./components/home.component";
import DisplayPage from "./components/display.component";


function App() {
  return (
        <Router>
            <Route path="/" exact component={DisplayPage} />
            <Route path="/home" exact component={HomePage} />
        </Router>
  );
}

export default App;
