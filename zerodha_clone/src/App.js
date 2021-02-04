import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
