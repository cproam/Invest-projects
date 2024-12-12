import { useEffect } from "react";
import "./index.css";

export default function InfoModal({ setInfoOpen, infoOpen }) {
  useEffect(() => {
    if (infoOpen) {
      const timeoutId = setTimeout(() => {
        setInfoOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [infoOpen]);

  return (
    <>
      <div className="modal_form">
        <div className="top-form popup">
          <div className="close" onClick={() => setInfoOpen(false)}>
            &times;
          </div>
          <div className="modal-info">
            <div className="modal-title" style={{ padding: "10px 10px 0 0" }}>
              Сегодня вы уже отправляли
              <br /> заявку по этой франшизе!
            </div>
            <p style={{ fontSize: "20px" }}>
              Рассмотрите другие предложения нашего каталога франшиз.
            </p>
          </div>

          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
}

/*  Сегодня вы уже отправляли заявку по проекту! вы можете отпралять заявки не чаще 1 раза в 48 часа*/
