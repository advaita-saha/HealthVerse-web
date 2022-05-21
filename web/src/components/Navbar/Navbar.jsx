import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">
          <div className="container">
            <Link to="/home" className="navbrand">
                <i className="fa-solid fa-house-medical" style={{ marginRight: "1.5rem" }}></i> 
                Healthverse
            </Link>
            <ul className="navmenu">
              <Link to="/home">Home</Link>
              <Link to="/doctor">Doctor</Link>
              <Link to="/patient">Patient</Link>
              <Link to="/manager">Hospital</Link>
              <button className="loginBtn">Login</button>
            </ul>
          </div>
      </nav>
    )
}

export default Navbar