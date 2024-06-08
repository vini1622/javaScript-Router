import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>lOGO</h1>
      </div>
      <div className="nav-items">
       <Link to="/"> <li>Home</li></Link>
       <Link to="about"> <li>About Us</li></Link> 
       <Link to="contact"><li>Contact Us</li></Link> 
      </div>
    </div>
  );
};
export default Header;
