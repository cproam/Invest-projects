"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DetectOS, GetBrowser } from "@/services/getUserDevices";
import { Telmask, pasteCallback } from "@/lib/telmask";
import { fetchIp } from "@/services/ip";
import { SendForm } from "@/services/sendForm";
import Loader from "@/components/Loader/Loader";
import "./style.css";

export default function Form({
  infoOpen,
  setInfoOpen,
  SetTypeToast,
  setToastOpen,
}) {
  const router = useRouter();
  const [ip, setIp] = useState();
  const phoneInput = useRef(null);
  const [Loading, setLoading] = useState(false);
  const [buttonEnabled, setbuttonEnabled] = useState(false);
  const [utmFromLocaleStorage, setUtmFromLocaleStorage] = useState(false);

  useEffect(() => {
    let value;
    value = JSON.parse(localStorage.getItem("utm")) || "";
    setUtmFromLocaleStorage(value);
  }, []);

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
    fetchIp().then(setIp);
  }, []);

  function ResultSendFormSuccess(data) {
    let status = data.data.status;
    if (status === 1) {
      router.push("/thanks");
    } else if (status === 2) {
      setInfoOpen(true);
      setLoading(false);
    } else if (status === 0) {
      setToastOpen(true);
      SetTypeToast("error");
    } else {
      console.error("неизвесный статус");
    }
  }

  function ResultSendFormErr() {
    setToastOpen(true);
    setLoading(false);
    SetTypeToast("error");
  }

  useEffect(() => {
    if (infoOpen) {
      const timeoutId = setTimeout(() => {
        setInfoOpen(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [infoOpen]);

  async function Record(event) {
    setbuttonEnabled(false);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("utm_source", utmFromLocaleStorage.utmSource);
    formData.append("utm_source_type", utmFromLocaleStorage.utmSourceType);
    formData.append("utm_medium", utmFromLocaleStorage.utmMedium);
    formData.append("utm_campaign", utmFromLocaleStorage.utmCampaign);
    formData.append("utm_campaign_name", utmFromLocaleStorage.utmCampaignName);
    formData.append("utm_content", utmFromLocaleStorage.utmContent);
    formData.append("utm_region_name", utmFromLocaleStorage.utmRegionName);
    formData.append("utm_term", utmFromLocaleStorage.utmTerm);
    formData.append("utm_placement", utmFromLocaleStorage.utmPlacement);
    formData.append("utm_position", utmFromLocaleStorage.utmPosition);
    formData.append("utm_position_type", utmFromLocaleStorage.utmPositionType);
    formData.append("utm_device", utmFromLocaleStorage.utmDevice);
    formData.append("yclid", utmFromLocaleStorage.yclid);
    formData.append("platform", DetectOS());
    formData.append("browser", GetBrowser());
    formData.append("ip", ip);
    formData.set("phone", formData.get("phone").replace(/[- )(]/g, ""));

    let formObject = {};
    setLoading(true);
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);

    SendForm(json, event)
      .then((data) => {
        ResultSendFormSuccess(data);
        event.target.reset();
      })
      .catch((error, event) => {
        event.target.reset();
        ResultSendFormErr(error);
      });
  }

  return (
    <>
      <form
        action=""
        method="post"
        className="form-box flex-wrap"
        onSubmit={Record}
      >
        <div className="title">У вас есть вопрос? Напишите его нам </div>
        <div className="input-wr">
          <div className="input-box">
            <input
              type="text"
              name="fullname"
              autoComplete="off"
              placeholder="Как к вам обращаться"
              required
              minLength="2"
              maxLength="25"
              className="suggestions-input"
              style={{ boxSizing: "border-box" }}
            />
            <div className="suggestions-wrapper">
              <div
                className="suggestions-suggestions"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            pattern="\+7\s\([0-68-9]{1}[0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            ref={phoneInput}
            onChange={checkPhoneInput}
            onPaste={checkPhonePaste}
            onFocus={checkFocus}
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Напишите свой вопрос..."
          required
        ></textarea>

        <button className="btn-yellow btn btn-form">
          {Loading ? <Loader /> : <span> Отправить сообщение</span>}
        </button>
        <div className="polit-descr contacts-btn">
          Нажимая кнопку &quot;Отправить сообщение&quot;, я подтверждаю, что
          ознакомлен и согласен с условиями &nbsp;
          <Link href="/policy" target="_blank" className="polit">
            политики обработки персональных данных
          </Link>
        </div>
      </form>
    </>
  );
}
