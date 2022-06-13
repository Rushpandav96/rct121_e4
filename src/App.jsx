// import logo from './logo.svg';
// import './App.css';
import Companies from ".components/Companies";
import Employee from ".components/Employee";
import Home from ".components/Home";
import {BrowserRouter as Router, useRoutes } from "react-router-dom";


  var Routess = () => {
    const routes = useRoutes([
      {path: "/", element : <Home/>},
      {path: "/employee", element : <Employee/>},
      {path: "/companies", element: <Companies/>}

    ]);
    
    return routes;
  }



function App() {
  return (
    <div className="App">
      <Router>
        <Routess></Routess>
      </Router>
    </div>
  );
}

export default App;
