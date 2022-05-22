import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({ isLoggedIn, currUser, role }) => {

  useEffect(() => {
    console.log("Auth status OR user changed")
  }, [currUser])
  return (
    <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbrand">
              <i className="fa-solid fa-house-medical" style={{ marginRight: "1.5rem" }}></i> 
              Healthverse
          </Link>
          <ul className="navmenu">
            {
              ((!isLoggedIn) && (currUser === null)) ?
              <>
                <Link to="/auth" className='navlogin'>Login</Link>
              </>
              :
              <>
                { (role === 'Doctor') && <Link to="/doctor">Doctor</Link>}
                { (role === 'Patient') && <Link to="/patient">Patient</Link>}
                { (role === 'Hospital') && <Link to="/manager">Hospital</Link>}
                <Link to="/auth" className='navlogin'>Profile</Link>
              </>
            }
          </ul>
        </div>
    </nav>
  )
}

export default Navbar