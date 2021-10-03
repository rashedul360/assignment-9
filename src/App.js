import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ServisesAPI from "./Components/ServisesAPI/ServisesAPI";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import NevigationBar from "./Components/NevigationBar/NevigationBar";
import Footer from "./Components/Footer/Footer";
import Teachers from "./Components/Teachers/Teachers";
import Teacher from "./Components/Teacher/Teacher";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NevigationBar />

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <ServisesAPI></ServisesAPI>
          </Route>
          <Route exact path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
