import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/register">Register</Link>
    </div>
  );
}
export default Home;
