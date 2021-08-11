import "./App.css";
import Nav from "./Components/Nav";
import { Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.css"
import Footer from './Components/Footer';
import Skills from "./Components/Skills/Skills";
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
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
      <Footer />
    </div>
  );
}

export default App;
