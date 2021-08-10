import "./App.css";
import Nav from "./Components/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "font-awesome/css/font-awesome.css"
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
