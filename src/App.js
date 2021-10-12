import React from "react";
import { Switch, Route } from "react-router-dom";
import AddTask from "./Components/AddTask/AddTask";
import Header from "./Components/Header/Header";

import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/addtask" component={AddTask} />
        <Route path="/" component={TodoList} />
      </Switch>
    </div>
  );
};

export default App;
