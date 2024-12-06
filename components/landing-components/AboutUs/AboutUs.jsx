import "./style.css";
import "../style.css";
import Image from "next/image";
import graph from "../../../public/graph1.webp";

export default function AboutUs() {
  return (
    <section className="aboutUs paddingblock">
      <div className="wrap">
        <h3 className="headline-h3">В цифрах о нас. Масштаб каталога </h3>

        <div className="aboutUs__descr">
          <div className="block-style">
            <span>113 000</span> заявок от <br /> потенциальных инвесторов
          </div>
          <div className="block-style block-w">
            <div>Стоит понимать, каталог — молодой, мы только разгоняемся.</div>
            <br />
            <div className="block-style">
              <span>3 890 753</span> просмотров в месяц - плановые показатели к
              концу 2024 года. Это не менее 10 000 заявок на все проекты в
              месяц.
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__graph">
        <div className="numbers-box__graph">
          <Image priority src={graph} alt="фон" className="" />
          <div className="line">
            <div className="point">
              <div className="details">
                <div className="views">
                  3 295 341
                  <br />
                  <span>просмотр</span>
                </div>
                <div className="orders">
                  7 720 <br />
                  <span>заявок</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="point">
              <div className="details">
                <div className="views">
                  3 890 753
                  <br />
                  <span>просмотра</span>
                </div>
                <div className="orders">
                  8 214 <br />
                  <span>заявок</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="point">
              <div className="details">
                <div className="views">
                  3 456 026
                  <br />
                  <span>просмотров</span>
                </div>
                <div className="orders">
                  10 122 <br />
                  <span>заявки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
