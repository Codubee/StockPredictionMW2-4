import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SamplePage from './components/SamplePage/SamplePage';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/input">
          <SamplePage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
