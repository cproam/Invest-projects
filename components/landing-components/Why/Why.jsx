"use client";

import "./style.css";
import "../style.css";
import Image from "next/image";
import why from "../../../public/why.webp";
import why1400 from "../../../public/why1400.webp";
import attract from "../../../public/attract.webp";
import attract1400 from "../../../public/attract1400.webp";
import garant from "../../../public/garant.webp";
import garant1400 from "../../../public/garant1400.webp";
import { useState, useEffect } from "react";

export default function Why() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="why paddingblock">
      <div className="wrap">
        <h3 className="headline-h3">
          Почему выгодно разместить инвестиционное предложение в каталоге
          PLATFORMA?
        </h3>

        <div className="why__content">
          <div className="content__block">
            <Image
              src={width > 1570 ? why : why1400}
              width={width > 1570 ? 765 : 684}
              height={width > 1570 ? 597 : 532}
              alt="изображение"
            />

            <div className="block__text">
              <p>Причина 01</p>
              <h4 style={{ fontWeight: 500, lineHeight: 1.4 }}>
                Вы платите только за заявки от потенциальных инвесторов
              </h4>
              <p>
                Один из самых прозрачных и выгодных способов рекламы: вы платите
                только за заявки от заинтересованных в вашем предложении
                инвесторов.&nbsp;
                <strong>
                  Размещение информации в каталоге бесплатно, без ограничения по
                  срокам.
                </strong>
              </p>
            </div>
          </div>

          <div className="content__block">
            <div className="block__text">
              <p>Причина 02</p>
              <h4 style={{ fontWeight: 500, lineHeight: 1.4 }}>
                Привлекаем только целевой трафик
              </h4>
              <p>
                Аудитория нашего сайта – это люди, заинтересованные в
                инвестировании в бизнес.
                <br /> <br />
                Возрастная категория -&nbsp;
                <strong>люди в возрасте 35-55 лет (93%).</strong> <br /> <br />
                Сюда входят:&nbsp;
                <strong>брокеры, частные и корпоративные инвесторы.</strong>
              </p>
            </div>{" "}
            <Image
              src={width > 1570 ? attract : attract1400}
              width={width > 1570 ? 765 : 684}
              height={width > 1570 ? 597 : 532}
              alt="изображение"
            />
          </div>

          <div className="content__block">
            <Image
              src={width > 1570 ? garant : garant1400}
              width={width > 1570 ? 765 : 684}
              height={width > 1570 ? 597 : 532}
              alt="изображение"
            />

            <div className="block__text">
              <p>Причина 03</p>
              <h4 style={{ fontWeight: 500, lineHeight: 1.4 }}>
                Гарантируем возврат денег по договору
              </h4>
              <p>
                Когда ваш проект получит необходимые инвестиции, публикацию в
                каталоге можно прекратить с возвратом неиспольванного бюжета.
                <br />
                Если ва в процессе работы, решите, что вам не подходит наш
                ресурс, и вы захотите прекратить публикацию ивестиционного
                предложения в каталоге,
                <strong>
                  &nbsp; мы вернём вам сумму от неиспользованного бюджета в
                  течении 5 рабочих дней.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
