import Link from "next/link";
import "./style.css";
import { telephone, telephoneMailto, email } from "./../../lib/tel";

export default function TheFooter() {
  return (
    <footer className="footer">
      <div className="wrap flex-wrap">
        <div className="footer-item flex-basis-25">
          <Link href="/" className="logo">
            <span>PLAT</span>FORMA
          </Link>
        </div>
        <div className="footer-item flex-basis-45 text-center">
          <p className="mb-2">
            Представленные на сайте данные носят информационный характер, не
            являются публичной офертой и индивидуальной инвестиционной
            рекомендацией.
          </p>
          <p>
            <span className="fs-16">*</span> Информация о доходности инвестиций
            предоставляется клиентами каталога, информационный ресурс не
            гарантирует указанную доходность
          </p>
        </div>
        <div className="footer-item flex-basis-25 text-left">
          <div>
            <Link className="phone" href={"tel:" + telephoneMailto}>
              {telephone}
            </Link>
            <Link className="mailto" href={"mailto:" + email}>
              {email}
            </Link>
          </div>
        </div>

        <div className="footer-item flex w-100">
          <div className="logo-comment">
            <div className="logo">
              <p>© PLATFORMA., {new Date().getFullYear()} г.</p>
            </div>
          </div>
          <p>
            <Link className="polit" href="/policy">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
