import { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
function App() {
  const [isLog, setIsLog] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setIsLog(!isLog)}>{isLog ? "Logout" : "Log in"}</button>
      </div>
      <Switch>
        <Route path="/About/:id/:product" component={About} />
        <Route path="/" component={Home} exact />
        <Route path="/Profile">
          <Profile isLog={isLog} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
