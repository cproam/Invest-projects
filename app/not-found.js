import Head from "next/head";
import styles from "./page.module.css";
import TheHeader from "@/components/TheHeader/TheHeader";

export const metadata = {
  title: "Страница не найдена",
  description: "Страница не найдена",
};

export default function NotFound() {
  return (
    <>
      <Head />
      <section id="main" className="main">
        <TheHeader />
        <div className={styles.notFound}>
          <h1>Страница не найдена</h1>
        </div>
      </section>
    </>
  );
}
