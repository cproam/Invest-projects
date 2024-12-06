import "./style.css";
import "../style.css";
import Image from "next/image";
import forWhom from "../../../public/forWhom.webp";

export default function ForWhom() {
  return (
    <section className="forWhom">
      <div className="forWhom__content">
        <div className="paddingblock">
          <h3 className="headline-h3">Для кого наш каталог? </h3>
          <p className="block-style">
            Наш каталог идеально подойдёт для компаний и предпринимателей,
            которые хотят привлечь ивестиции для развития своего бизнеса или
            открытия стартапа. В каталоге размещаются различные проекты, от идей
            открытия стартапа до крупного бизнеса. В нашем каталоге вы можете
            найти, как основного стратегического инвестора, которые закроет весь
            объём нужных вложений, так и собрать пул из миноритарных инвесторов.
            Привлекаемая сумма инвестиций может быть от нескольких сотен тысяч
            рублей до нескольких миллиардов.
            <br /> <br />
            Под любые задачи и предложения найдётся свой инвестор.
          </p>
        </div>
      </div>

      <div className="forWhom__img-container">
        <Image src={forWhom} alt="картинка" />
      </div>
    </section>
  );
}
