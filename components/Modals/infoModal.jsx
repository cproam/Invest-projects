"use client";

import { useEffect, useState } from "react";
import "./index.css";

export default function InfoModal({ setOpenInfo }) {
  return (
    <>
      <div id="add-franch" className="modal_form">
        <div className="top-form popup">
          <div className="close" onClick={() => setOpenInfo(false)}>
            &times;
          </div>
          <div className="modal-info">
            <div className="modal-title" style={{ padding: "10px 10px 0 0" }}>
              Вы можете отправить не более 5 заявок в день
            </div>
            <p style={{ fontSize: "20px" }}>
              Возвращайтесь к нам завтра и получите презентации интересующих
              франшиз.
            </p>
          </div>

          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
}
