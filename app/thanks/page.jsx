import Link from "next/link";
import "./style.css";
import Head from "next/head";
import TheHeader from "@/components/TheHeader/TheHeader";

export const metadata = {
  title: "Спасибо",
  description: "Спасибо",
};

export default function Thanks() {
  return (
    <>
      <Head />
      <section id="main">
        <TheHeader />
        <div style={{ margin: "20px 0 160px 0" }}>
          <div className="wrap wrap-thanks">
            <div className="page-title">Спасибо за заявку!</div>

            <h2 className="page-headline">
              Мы свяжемся с Вами в ближайшее время.
            </h2>
            <p className="timeline">
              График работы: Пн-Пт с 9.00 до 18.00 по МСК <br />
              Если Вы оставили заявку в нерабочее время, мы перезвоним Вам на
              следующий рабочий день
            </p>
            <Link href="/" className="btn-yellow btn-yellow big-btn">
              Вернуться на сайт
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
