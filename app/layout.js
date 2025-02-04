import "./globals.css";
import TheFooter from "@/components/TheFooter/TheFooter";
import { GetUTMParams } from "@/lib/GetUTMParams";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <GetUTMParams />
      <Head>
        <title>Каталог инвестпроектов</title>
        <meta name="description" content="Размещение проектов каталоге"></meta>
        <meta name="keywords" content="Каталог инвестиционных проектов"></meta>
      </Head>
      <body>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99046682, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
            });`}
        </Script>
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
