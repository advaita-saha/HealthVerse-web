import "./Footer.css"
import wave from "./../../assets/footer_wave.svg"

const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} className='wave' alt="wave" />
        <div className="footer-content">
            <h1>HealthVerse</h1>
        </div>
        <div className="copyright"> Copyright &copy; 2022 HEALTHVERSE - ALL RIGHTS RESERVED </div>
    </div>
  )
}

export default Footer