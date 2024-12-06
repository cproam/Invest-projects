"use client";
import "./style.css";
import "../style.css";
import { useState } from "react";
import RequestModal from "@/components/Modals/RequestModal";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="banner" style={{ color: "white" }}>
      <div className="banner__block">
        <div className="wrap">
          <h1>
            Свяжитесь с нами <br /> для публикации <br /> инвест-проекта <br />в
            каталоге PLATFORMA
          </h1>

          <button
            className="btn btn-yellow openTafif"
            onClick={() => setShowModal(true)}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      {showModal && (
        <RequestModal
          setShowModal={setShowModal}
          showModal={showModal}
          type={"sendProject"}
        />
      )}
    </section>
  );
}
