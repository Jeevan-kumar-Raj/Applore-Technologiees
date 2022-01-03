import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Blogdescscreen from "./screens/Blogdescscreen";

import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import Writerscreen from "./screens/Writerscreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />

        <Route path="/blog/:id" component={Blogdescscreen} />

        <Route path="/register" component={Registerscreen} />

        <Route path="/login" component={Loginscreen} />

        <Route path="/profile" component={Profilescreen} />

        <Route path="/admin" component={Adminscreen} />
        <Route path="/writer" component={Writerscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
