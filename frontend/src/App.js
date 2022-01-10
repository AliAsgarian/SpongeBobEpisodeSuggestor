import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./components/home.component";
import DisplayPage from "./components/display.component";


function App() {
  return (
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/display" component={DisplayPage} />
        </Router>
  );
}

export default App;
