import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Telmask, pasteCallback } from "@/lib/telmask";
import { DetectOS, GetBrowser, GetUserIp } from "@/services/getUserDevices";
import Link from "next/link";
import "./index.css";
import { gmt } from "@/lib/gmt";

export default function PresentationModal({ setOpen, type, projectId }) {
  const [active, setActive] = useState("phone");
  const [buttonEnabled, setbuttonEnabled] = useState(false);
  const sendButton = useRef(null);
  const [ip, setIp] = useState();

  const [placeholderText, setPlaceholderText] = useState(
    "Введите номер телефона"
  );
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState(null);
  const phoneInput = useRef(null);

  useEffect(() => {
    if (active === "phone") {
      setPlaceholderText("Введите номер телефона");
    } else if (active === "whatsapp") {
      setPlaceholderText("Введите номер WhattApp");
    } else if (active === "telegram") {
      setPlaceholderText("telegram");
    } else if (active === "email") {
      setPlaceholderText("Введите номер телефона");
    } else {
      setPlaceholderText("");
    }
  }, [active]);

  const ToggleBtn = (value) => {
    if (value.length === 16) {
      setbuttonEnabled(true);
    } else {
      setbuttonEnabled(false);
    }
  };

  const checkPhoneInput = (event) => {
    let { value } = event.target;
    value = Telmask(event);
    ToggleBtn(value);
  };

  const checkPhonePaste = (event) => {
    const { value } = event.target;
    pasteCallback(event);
    ToggleBtn(value);
  };

  function checkFocus() {
    let phoneEl = phoneInput.current;
    Telmask({ target: phoneEl });
  }

  useEffect(() => {
    GetUserIp()
      .then((response) => response.json())
      .then((response) => {
        setIp(response.ip);
      });
  }, []);

  useEffect(() => {
    //let phoneEl = phoneInput.current;
    // Telmask({ target: phoneEl });
    function HandleEscapeKey(event) {
      if (event.code === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", HandleEscapeKey);
    return () => document.removeEventListener("keydown", HandleEscapeKey);
  }, []);

  useEffect(() => {
    if (searchParams) {
      const params = Object.fromEntries(searchParams.entries());
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_placement",
        "utm_region_name",
      ];
      const filteredParams = utmKeys.reduce((acc, key) => {
        if (params[key]) acc[key] = params[key];
        return acc;
      }, {});

      setUtmParams(filteredParams);
    }
  }, [searchParams]);
  console.log(gmt);

  async function Record(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("utm_source", utmParams.utm_source);
    formData.append("utm_medium", utmParams.utm_medium);
    formData.append("utm_campaign", utmParams.utm_campaign);
    formData.append("utm_term", utmParams.utm_term);
    formData.append("utm_content", utmParams.utm_content);
    formData.append("utm_placement", utmParams.utm_placement);
    formData.append("utm_region_name", utmParams.utm_region_name);
    formData.append("project", projectId);
    formData.append("platform", DetectOS());
    formData.append("browser", GetBrowser());
    formData.append("ip", ip);
    formData.set("phone", formData.get("phone").replace(/[- )+(]/g, ""));
    formData.append("gmt", gmt);

    let formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);

    const result = await fetch("/api/sendform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (result.status) {
      setOpen(false);
    }
    if (result.status === 200) {
      alert("Форма отправлена");
    }
    if (result.status != 200) {
      alert("Ошибка отправки формы");
    }
  }

  return (
    <div id="get-present" className="modal_form">
      <div className="top-form popup">
        <div className="close" onClick={() => setOpen(false)}>
          &times;
        </div>
        <form
          action=""
          method="post"
          className="custom-form modal-form ajax_form"
          onSubmit={Record}
        >
          {type === "presentation" && (
            <div className="modal-title">
              Заполните форму для получения презентации
            </div>
          )}

          {type != "presentation" && (
            <div className="modal-title">
              Куда вам отправить презентацию инвестпроекта?
            </div>
          )}

          <fieldset className="options">
            <div className="field">
              <input
                type="radio"
                id="radio_phone"
                className="radio_phone"
                name="option"
                value="Телефон"
                defaultChecked
                onClick={() => setActive("phone")}
              />
              <label htmlFor="radio_phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone-vibrate"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648" />
                </svg>
                <br /> Телефон
              </label>
            </div>
            <div className="field">
              <input
                type="radio"
                id="radio_whatsapp"
                className="radio_whatsapp"
                name="option"
                value="WhatsApp"
                onClick={() => setActive("whatsapp")}
              />
              <label htmlFor="radio_whatsapp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                <br /> WhatsApp
              </label>
            </div>
            <div className="field">
              <input
                type="radio"
                id="radio_telegram"
                className="radio_telegram"
                name="option"
                value="Telegram"
                onClick={() => setActive("telegram")}
              />
              <label htmlFor="radio_telegram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
                <br /> Telegram
              </label>
            </div>
            <div className="field">
              <input
                type="radio"
                id="radio_email"
                className="radio_email"
                name="option"
                value="E-mail"
                onClick={() => setActive("email")}
              />
              <label htmlFor="radio_email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
                <br /> E-mail
              </label>
            </div>
          </fieldset>

          <div className="input-box">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Введите имя"
              required
              minLength="2"
              maxLength="25"
            />
          </div>

          {active && (
            <input
              type="tel"
              name="phone"
              placeholder={placeholderText}
              ref={phoneInput}
              data-phone-pattern
              onChange={checkPhoneInput}
              onPaste={checkPhonePaste}
              onFocus={checkFocus}
            />
          )}
          {active === "email" && (
            <input type="email" name="email" placeholder="Введите e-mail" />
          )}

          <button
            ref={sendButton}
            className="btn submit btn-yellow big-btn"
            style={{ width: "100%", textAlign: "center" }}
            disabled={!buttonEnabled}
          >
            Получить презентацию
          </button>

          <div className="polit-descr">
            Нажимая кнопку&nbsp;&quot;Получить презентацию&quot;, я подтверждаю,
            что ознакомлен и согласен с условиями &nbsp;
            <Link href="/policy" target="_blank" className="polit">
              политики обработки персональных данных
            </Link>
          </div>
        </form>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
