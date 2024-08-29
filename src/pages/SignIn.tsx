import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Auth from "../components/SignIn";

const Login = () => {
  return (
    <div>
      <NavLink to="/">a</NavLink>
      <Header />
      <Auth />
    </div>
  )
}
export default Login;