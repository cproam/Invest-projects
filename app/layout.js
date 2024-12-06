import "./globals.css";
import TheFooter from "@/components/TheFooter/TheFooter";
import YandexMetrikaContainer from "@/lib/yandexMetrika";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <title>Каталог инвестпроектов</title>
        <meta name="description" content="Размещение проектов каталоге"></meta>
        <meta name="keywords" content="Каталог инвестиционных проектов"></meta>
      </Head>

      <body>
        <main>{children}</main>
        <TheFooter />
        <YandexMetrikaContainer />
      </body>
    </html>
  );
}
