import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import CompanyInput from './components/CompanyInput/CompanyInput';
import MyNavbar from "./components/MyNavbar/MyNavbar";
import StockDetails from './components/StockDetails/StockDetails'
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
        <Route path="/input" component={CompanyInput} />
        <Route path="/information/:companyName" component={StockDetails} />
        <Route path="/"  component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
