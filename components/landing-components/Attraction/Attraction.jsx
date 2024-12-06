import "./style.css";
import "./../style.css";
import Image from "next/image";
import graph from "../../../public/graph.webp";

export default function Attraction() {
  return (
    <section className="attraction paddingblock">
      <div className="wrap" style={{ color: "white" }}>
        <h3 className="headline-h3" style={{ color: "white" }}>
          Привлекли инвесторов <br /> на 1,78 млрд рублей
        </h3>

        <div className="attraction__content">
          <div className="paragraph-p">
            <p>
              <span>113 000 </span>заявок оставили на инвестиционные проекты
            </p>
          </div>
          <div className="paragraph-p">
            <p>
              <span>1 691</span> — общее количество привлеченных инвесторов
            </p>
          </div>
          <div className="paragraph-p">
            <p>
              <span>1 050 000</span> - средняя сумма инвестиций (есть как и
              небольшие инвесторы, так и крупные. Здесь указана средняя величина
              инвестиции)
            </p>
          </div>
        </div>
      </div>

      <div className="attraction-img">
        <span className="img-1">113 000</span>
        <span className="img-2">1 691</span>
        <span className="img-3">1 050 000</span>
        <Image priority src={graph} alt="фон" />
        <div className="att-table">
          <h5 className="paragraph-p"> Итого привлеченных инвестиций:</h5>
          <p> 1 691 х 1 055 000 = 1 784 005 000 рублей</p>
          <div>
            <span>
              *Сумма привлеченных инвестиций указана для инвесторов, <br />
              работающие по схеме франчайзинга и открытия бизнеса под ключ.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
