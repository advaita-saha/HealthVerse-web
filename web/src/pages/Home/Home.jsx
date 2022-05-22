import { Link } from 'react-router-dom'
import './Home.css'
import HeroImg from "./../../assets/HeroIllustration.svg"
import MetaMaskIcon from "./../../assets/metamaskIcon.svg"

const Home = () => {
  return (
    <div className="container">
      <div className="landing-grid hero">
        <div className="hero-desc">
          <p className='hero-heading'>Get Medical Records Secured</p>
          <p className='hero-txt'>We Secure your Medical Records for you on Blockchain Technology and Safeguard your Identity</p>
          <Link to="/auth" className='hero-cta'>
            <img src={MetaMaskIcon} style={{ width: "3rem", marginRight: "1.5rem" }} alt="metamask-icon" />
            Login using MetaMask
          </Link>
        </div>
        <div className="image">
          <img src={HeroImg} alt="HeroImg" />
        </div>
      </div>
    </div>
  )
}

export default Home