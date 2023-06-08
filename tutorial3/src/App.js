import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Registerform from './Registerform';
import Profile from './Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Registerform/>} />
        <Route path="/profile" element = {<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
