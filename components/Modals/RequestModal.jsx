import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Telmask, pasteCallback } from "@/lib/telmask";
import { DetectOS, GetBrowser } from "@/services/getUserDevices";
import Link from "next/link";
import "./index.css";
import { gmt } from "@/lib/gmt";
import { utmKeys } from "@/lib/umt";
import { fetchIp } from "@/services/ip";

export default function RequestModal({ setShowModal, type }) {
  const searchParams = useSearchParams();
  const [ip, setIp] = useState("");
  const [utmParams, setUtmParams] = useState(null);
  const phoneInput = useRef(null);
  const [buttonEnabled, setbuttonEnabled] = useState(false);

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
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setShowModal(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    if (searchParams) {
      const params = Object.fromEntries(searchParams.entries());
      const filteredParams = utmKeys.reduce((acc, key) => {
        if (params[key]) acc[key] = params[key];
        return acc;
      }, {});

      setUtmParams(filteredParams);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchIp().then(setIp);
  }, []);

  async function Record(event) {
    setbuttonEnabled(false);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("utm_source", utmParams.utm_source);
    formData.append("utm_source_type", utmParams.utm_source_type);
    formData.append("utm_medium", utmParams.utm_medium);
    formData.append("utm_campaign", utmParams.utm_campaign);
    formData.append("utm_campaign_name", utmParams.utm_campaign_name);
    formData.append("utm_content", utmParams.utm_content);
    formData.append("utm_region_name", utmParams.utm_region_name);
    formData.append("utm_term", utmParams.utm_term);
    formData.append("utm_placement", utmParams.utm_placement);
    formData.append("utm_position", utmParams.utm_position);
    formData.append("utm_position_type", utmParams.utm_position_type);
    formData.append("utm_device", utmParams.utm_device);
    formData.append("yclid", utmParams.yclid);
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

    try {
      const result = await fetch("/api/sendform", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (result.ok) {
        alert("Форма отправлена");
      }
      if (!result.ok) {
        throw new Error(`Network response was not ok (${result.status})`);
      }
    } catch (error) {
      alert("Ошибка отправки формы");
    } finally {
      setShowModal(false);
    }
  }

  return (
    <>
      <div id="add-franch" className="modal_form">
        <div className="top-form popup">
          <div className="close" onClick={() => setShowModal(false)}>
            &times;
          </div>
          <form
            action=""
            method="post"
            className="custom-form modal-form ajax_form"
            onSubmit={Record}
          >
            {type === "sendPresentation" && (
              <div className="modal-title">
                Отправьте заявку на получение презентации
              </div>
            )}

            {type === "sendProject" && (
              <div className="modal-title">
                Отправьте заявку на размещение проекта
              </div>
            )}

            <div className="input-box">
              <input
                type="text"
                name="fullname"
                autoComplete="off"
                placeholder="Введите ваше имя"
                required
                minLength="2"
                maxLength="25"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                ref={phoneInput}
                name="phone"
                placeholder="Введите номер телефона"
                onChange={checkPhoneInput}
                onPaste={checkPhonePaste}
                onFocus={checkFocus}
              />
            </div>
            <button
              className="btn submit btn-yellow big-btn"
              disabled={!buttonEnabled}
            >
              Разместить проект
            </button>
            <div className="polit-descr">
              Нажимая кнопку&nbsp;&quot;Разместить проект&quot;, я подтверждаю,
              что ознакомлен и согласен с условиями &nbsp;
              <Link href="/policy" target="_blank" className="polit">
                политики обработки персональных данных
              </Link>
            </div>
          </form>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
