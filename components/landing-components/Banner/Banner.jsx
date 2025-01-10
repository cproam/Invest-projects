"use client";
import "./style.css";
import "../style.css";
import { useState } from "react";
import RequestModal from "@/components/Modals/RequestModal";
import Toast from "@/components/Modals/Toast";
import InfoModal from "@/components/Modals/InfoModal";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [typeToast, SetTypeToast] = useState();

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
          setToastOpen={setToastOpen}
          SetTypeToast={SetTypeToast}
          setInfoOpen={setInfoOpen}
        />
      )}

      {toastOpen && (
        <Toast
          typeToast={typeToast}
          setToastOpen={setToastOpen}
          toastOpen={toastOpen}
        />
      )}

      {infoOpen && <InfoModal setInfoOpen={setInfoOpen} infoOpen={infoOpen} />}
    </section>
  );
}
