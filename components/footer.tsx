"use client"

import "@/styles/footer.css"
import { useLanguage } from "@/components/language-context"

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <a href="/"><img src="/logonev.jpg" alt="logo" width={150} height={100} /></a>
            {/* <h4>Ishan Learning</h4> */}
          </div>
          <p>
           {t("footerTagline")}
          </p>
        </div>

        <div className="footer-section">
          <h4>{t("footerExplore")}</h4>
          <ul>
            <li>
              <a href="\#classes">{t("footerClass6to8")}</a>
            </li>
            <li>
              <a href="\#classes">{t("footerClass9to10")}</a>
            </li>
            <li>
              <a href="\#classes">{t("footerClass11to12")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footerSupport")}</h4>
          <ul>
            <li>
              <a href="/help" target="_blank">{t("footerHelpCenter")}</a>
            </li>
            <li>
              <a href="/faq">{t("footerFAQ")}</a>
            </li>
            <li>
              <a href="/contact">{t("footerContactUs")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footerLegal")}</h4>
          <ul>
            <li>
              <a href="/privacy">{t("footerPrivacy")}</a>
            </li>
            <li>
              <a href="/terms">{t("footerTerms")}</a>
            </li>
            {/* <li>
              <a href="#cookies">Cookie Settings</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footerCopyright")}</p>
        <div className="footer-socials">
          <a href="\fb" target="_blank"><img src="\fb.png" alt="facebook" /></a>
          <a href="\tw" target="_blank"><img src="\tw.png" alt="twitter" /></a>
          <a href="\ins" target="_blank"><img src="\ins.png" alt="instagrem" /></a>
          <a href="\tel" target="_blank"><img src="\tel.png" alt="telegram" /></a>
          <a href="\in" target="_blank"><img src="\i.png" alt="linkedin" /></a>
          <a href="\w" target="_blank"><img src="\w.png" alt="whatsapp" /></a>
          <a href="\yt" target="_blank"><img src="\yt.png" alt="youtube" /></a>
        </div>
      </div>
    </footer>
  )
}
