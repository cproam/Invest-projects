"use client";
import "./style.css";
import "../style.css";
import { useEffect, useState } from "react";
import RequestModal from "@/components/Modals/RequestModal";
import Toast from "@/components/Modals/Toast";
import InfoModal from "@/components/Modals/InfoModal";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [typeToast, SetTypeToast] = useState();

  useEffect(() => {
    if (toastOpen) {
      const timeoutId = setTimeout(() => {
        setToastOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [toastOpen]);

  useEffect(() => {
    if (infoOpen) {
      const timeoutId = setTimeout(() => {
        setInfoOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [infoOpen]);

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

      {toastOpen && <Toast typeToast={typeToast} setToastOpen={setToastOpen} />}
      {infoOpen && <InfoModal setInfoOpen={setInfoOpen} />}
    </section>
  );
}
