import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import { Navigation, Home, About, Contact,Dataset, Header, MyComponent } from "./components";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header onScroll={MyComponent()}/> */}
        <Header/>
        <Navigation />
        <Switch>
          <Route path="/about" exact component={() => <About />} />
          <Route path="/data" exact component={() => <Dataset />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;