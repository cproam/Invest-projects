"use client";

import "./index.css";

export default function InfoModal() {
  return (
    <>
      <div id="add-franch" className="modal_form">
        <div className="top-form popup">
          <div className="close" onClick={() => setOpenInfo(false)}>
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
