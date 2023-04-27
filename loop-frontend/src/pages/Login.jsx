import { Link } from "react-router-dom";
import loginHandler from "../utils";
function Login(props) {
  const login = async () => {
    const data = await loginHandler("sad", "asdasd");
    props.setLoggedInUserId(data.id);
    props.setLoggedInUsername(data.fields.username);
  };
  return (
    <div>
      <button onClick={login}>Login</button>
      <Link to="/">Home</Link>
    </div>
  );
}
export default Login;
