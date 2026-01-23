import "@/styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <a href="/"><img src="/logonev.jpg" alt="logo" width={150} height={100} /></a>
            {/* <h4>Ishan Learning</h4> */}
          </div>
          <p>
           A learning support platform for clear and stress-free learning.
          </p>
        </div>

        <div className="footer-section">
          <h4>EXPLORE</h4>
          <ul>
            <li>
              <a href="\#classes">Upper Primary Classes 6 - 8</a>
            </li>
            <li>
              <a href="\#classes">High School Classes 9 - 10</a>
            </li>
            <li>
              <a href="\#classes">Intermediate Classes 11 - 12</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li>
              <a href="/help" target="_blank">Help Center</a>
            </li>
            <li>
              <a href="/faq">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            {/* <li>
              <a href="#cookies">Cookie Settings</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ishan Learning. All rights reserved.</p>
        <div className="footer-socials">
          <a href="\fb" target="_blank"><img src="\fb.png" alt="facebook" /></a>
          <a href="\tw" target="_blank"><img src="\tw.png" alt="twitter" /></a>
          <a href="\ins" target="_blank"><img src="\ins.png" alt="instagrem" /></a>
          <a href="\tel" target="_blank"><img src="\tel.png" alt="telegram" /></a>
          <a href="\w" target="_blank"><img src="\w.png" alt="whatsapp" /></a>
          <a href="\yt" target="_blank"><img src="\yt.png" alt="youtube" /></a>
        </div>
      </div>
    </footer>
  )
}
