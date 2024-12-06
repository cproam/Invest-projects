"use client";
import "./style.css";
import { useState } from "react";

import TheHeader from "@/components/TheHeader/TheHeader";
import RequestModal from "@/components/Modals/RequestModal";

export default function InvestContent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="main" className="bg-invest">
        <TheHeader />
        <div className="wrap" style={{ position: "relative" }}>
          <h1 className="placing__headline">
            Хотите привлечь инвестиции <br className="placing-br" />
            в свой бизнес, но не знаете <br className="placing-br" />с чего
            начать?
          </h1>
          <p className="pre-line">
            Разместите свой проект в нашем каталоге и получайте целевые заявки
            от заинтересованных инвесторов
          </p>
          <button
            className="btn btn-yellow big-btn btn-pdf-new openTafif"
            onClick={() => setShowModal(true)}
          >
            <i className="i-download-pdf"></i> Получить презентацию
          </button>
        </div>
      </section>
      {showModal && (
        <RequestModal
          setShowModal={setShowModal}
          showModal={showModal}
          type={"sendPresentation"}
        />
      )}
    </>
  );
}
