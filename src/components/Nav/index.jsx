import "./style.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <div className="topnav">
        <NavLink exact activeClassName='active' to="/">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/countdown">Count Down</NavLink>
        <NavLink to="/fetchApi">API</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/youtube">Youtube</NavLink>

      </div>
  );
};

export default Nav;
