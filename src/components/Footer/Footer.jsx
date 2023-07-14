import "../../static/css/Footer.css"
import Seperator from "../Icons/Seperator"
import GlobeIcon from "../Icons/Globe"
import Facebook from "../Icons/Facebook"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Slider from "../Icons/Slider"

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="sitemap-container">
          <div className="sitemap">
            <ul className="sitemap-section">
              <li className="sitemap-section-title text-light-bold">Support</li>
              <li className="footer-link">Help Center</li>
              <li className="footer-link">AirCover</li>
              <li className="footer-link">Supporting people with disabilities</li>
              <li className="footer-link">Cancellation options</li>
              <li className="footer-link">Our COVID-19 Response</li>
              <li className="footer-link">Report a neighborhood concern</li>
            </ul>
            <ul className="sitemap-section">
              <li className="sitemap-section-title text-light-bold">Community</li>
              <li className="footer-link">Airbnb.org: disaster relief housing</li>
              <li className="footer-link">Combating discrimination</li>
            </ul>
            <ul className="sitemap-section">
              <li className="sitemap-section-title text-light-bold">Hosting</li>
              <li className="footer-link">Airbnb your home</li>
              <li className="footer-link">AirCover for Hosts</li>
              <li className="footer-link">Explore hosting resources</li>
              <li className="footer-link">Visit our community forum</li>
              <li className="footer-link">How to host responsibly</li>
              <li className="footer-link">Airbnb-friendly apartments</li>
            </ul>
            <ul className="sitemap-section">
              <li className="sitemap-section-title text-light-bold">Airbnb</li>
              <li className="footer-link">Newsroom</li>
              <li className="footer-link">Learn about new features</li>
              <li className="footer-link">Letter from our founders</li>
              <li className="footer-link">Careers</li>
              <li className="footer-link">Investors</li>
              <li className="footer-link">Gift cards</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <div>
                <a href="https://github.com/ardakoc/airbnb-experiences-clone-lite/" className="copyright">© 2023 Arda Koç</a>
              </div>
              <Seperator />
              <p className="footer-link">Terms</p>
              <Seperator />
              <p className="footer-link">Sitemap</p>
              <Seperator />
              <p className="footer-link">Privacy</p>
              <Seperator />
              <p className="footer-link choices">Your Privacy Choices<span><Slider /></span></p>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-bottom-right-general">
                <li className="footer-link-with-logo">
                  <GlobeIcon />
                  <span className="footer-link text-light-bold">English (US)</span>
                </li>
                <li className="footer-link-with-logo">
                  <span className="footer-link text-light-bold">$</span>
                  <span className="footer-link text-light-bold">USD</span>
                </li>
              </div>
              <div className="footer-brands">
                <li className="footer-brand-icon"><Facebook /></li>
                <li className="footer-brand-icon"><Twitter /></li>
                <li className="footer-brand-icon"><Instagram /></li>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </footer>
  )
}