import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import ShelfA from "./Components/ShelfA/Shelf-A";
import ShelfB from "./Components/ShelfB/Shelf-B";
import ShelfC from "./Components/ShelfC/Shelf-C";
import ShelfD from "./Components/ShelfD/Shelf-D";

export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/shelfa" component={ShelfA} />
    <Route path="/shelfb" component={ShelfB} />
    <Route path="/shelfc" component={ShelfC} />
    <Route path="/shelfd" component={ShelfD} />
  </Switch>
);
