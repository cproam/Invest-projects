"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { telephone, telephoneMailto, email } from "../../lib/tel";
import TheHeader from "@/components/TheHeader/TheHeader";
import InfoModal from "@/components/Modals/InfoModal";
import Form from "./Form";
import "./style.css";
import Head from "next/head";
import Toast from "@/components/Modals/Toast";

/*
export const metadata = {
  title: "Каталог инвестиционных проектов",
  description: "Каталог инвестиционных проектов",
  keywords: "Каталог инвестиционных проектов",
};
*/
export default function Contacts() {
  const [toastOpen, setToastOpen] = useState(false);
  const [typeToast, SetTypeToast] = useState();
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
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
            <Form
              infoOpen={infoOpen}
              setInfoOpen={setInfoOpen}
              setToastOpen={setToastOpen}
              SetTypeToast={SetTypeToast}
            />
          </Suspense>
          <div style={{ paddingBottom: "20px" }}></div>
        </div>
      </section>

      {toastOpen && (
        <Toast
          typeToast={typeToast}
          setToastOpen={setToastOpen}
          toastOpen={toastOpen}
        />
      )}

      {infoOpen && <InfoModal setInfoOpen={setInfoOpen} infoOpen={infoOpen} />}
    </>
  );
}
