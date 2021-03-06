import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./pages/css/css-reset.css";
import "./index.scss";
import App from "./App";
import Menu from "./components/Menu";
import Music from "./pages/Music";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

const history = createBrowserHistory();
ReactDOM.render(
  <Provider>
    <Router history={history}>
      <div>
        <Menu />
        <div id="wrapper">
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/music" component={Music} />
          <Route exact={true} path="/events" component={Events} />
          <Route exact={true} path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
