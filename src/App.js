import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import CovidApi from "./components/CovidApi";
// import CountDown from "./components/CountDown";
import CountDownFnc from "./components/CountDownFnc";
import Home from "./components/Home";
import Blog from "./components/Blog/";
import DetailBlog from "./components/DetailBlog";
import AddNewBlog from "./components/AddNewBlog";
import NotFound from "./components/NotFound";
import Youtube from "./components/Youtube";

const App = () => {
  
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Tap the duc",
      type: "neil",
    },
    {
      id: 2,
      name: "Doc sach",
      type: "mike",
    },
    {
      id: 3,
      name: "Lam bai tap",
      type: "neil",
    },
    {
      id: 4,
      name: "Giat ao quan",
      type: "mike",
    },
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    if (!value) {
      alert("Ban Chua Nhap");
      return;
    }

    let newTodo = { id: Math.floor(Math.random() * 1000), name: value };
    setTodos([...todos, newTodo]);

    setValue("");
  };

  const deleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = todos.filter((item) => item.id !== id);

    setTodos(currentTodo);
  };

  // const timeOut = () => {
  //   alert("Time Out");
  // };

  useEffect(() => {}, [value]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todos">
              <Todos
                todos={todos}
                title="Todos Pages"
                deleteTodo={deleteTodo}
                value = {value}
                handleChange={handleChange}
                handleClick={handleClick}
              />
            </Route>
            <Route path="/countdown">
              <CountDownFnc  />
            </Route>
            <Route path="/fetchApi">
              <CovidApi />
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>

            <Route path="/blog/:id" exact>
              <DetailBlog />
            </Route>

            <Route path='/add-new-blog'>
              <AddNewBlog/>
            </Route>

            <Route path='/youtube'>
              <Youtube/>
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>

          {/* <Todos todos={todos} title="Todos Pages" deleteTodo={deleteTodo} /> */}

          
          
        </header>
      </div>
    </Router>
  );
};

export default App;
