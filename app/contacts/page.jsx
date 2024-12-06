import Link from "next/link";
import { Suspense } from "react";
import { telephone, telephoneMailto, email } from "../../lib/tel";
import TheHeader from "@/components/TheHeader/TheHeader";
import Form from "./Form";
import "./style.css";
import Head from "next/head";

export const metadata = {
  title: "Каталог инвестиционных проектов",
  description: "Каталог инвестиционных проектов",
  keywords: "Каталог инвестиционных проектов",
};

export default function Contacts() {
  return (
    <>
      {" "}
      <Head />
      <section id="main" className="main">
        <TheHeader />
        <div className="wrap">
          <div className="page-title">Наши контакты</div>

          <div className="contact-box">
            <Link href={"tel:" + telephoneMailto} className="big-phone">
              {telephone}
            </Link>
            <br />
            <Link href={"mailto:" + email} className="email-href">
              {email}
            </Link>
          </div>
          <Suspense>
            <Form />
          </Suspense>
          <div style={{ paddingBottom: "20px" }}></div>
        </div>
      </section>
    </>
  );
}
