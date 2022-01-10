import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import DisplayPage from "./components/display.component";


function App() {
  return (
        <Router>
            <Route path="/" exact component={DisplayPage} />
        </Router>
  );
}

export default App;
