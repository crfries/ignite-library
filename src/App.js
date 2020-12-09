//pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//components
import GlobalStyles from "./components/GlobalStyles";
//route
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
