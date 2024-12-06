import ScrollToTopButton from "@/components/ScrollUp";
import Projects from "../components/Projects/Projects";
import TheHeader from "@/components/TheHeader/TheHeader";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Каталог инвестиционных проектов",
  description: "Каталог инвестиционных проектов",
  keywords: "Каталог инвестиционных проектов",
};

export default function Home() {
  return (
    <>
      <Head></Head>
      <section id="main" className="main">
        <TheHeader />
        <div id="hero">
          <div className="container">
            <h1>Каталог инвестиционных проектов</h1>
            <h2 className="pagestyle">
              Инвестируйте в действующие бизнесы или стартапы с доходностью от
              15% до 50% годовых*
            </h2>
          </div>
        </div>
        <Projects />
        <ScrollToTopButton />
      </section>
    </>
  );
}
