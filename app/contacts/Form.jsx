"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DetectOS, GetBrowser, GetUserIp } from "@/services/getUserDevices";
import { Telmask, pasteCallback } from "@/lib/telmask";
import Link from "next/link";
import "./style.css";

export default function Form() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [ip, setIp] = useState();
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
    GetUserIp()
      .then((response) => response.json())
      .then((response) => {
        setIp(response.ip);
      });
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
    formData.append("platform", DetectOS());
    formData.append("browser", GetBrowser());
    formData.append("ip", ip);
    formData.set("phone", formData.get("phone").replace(/[- )(]/g, ""));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

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

    if (result.status == 200) {
      router.push("/thanks");
    }
    if (result.status != 200) {
      alert("Ошибка отправки формы");
    }
  }

  return (
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
            name="name"
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
          ref={phoneInput}
          onChange={checkPhoneInput}
          onPaste={checkPhonePaste}
          onFocus={checkFocus}
          required
        />
        <input type="email" name="email" placeholder="Ваш e-mail" required />
      </div>
      <textarea
        name="message"
        placeholder="Напишите свой вопрос..."
        required
      ></textarea>

      <button className="btn-yellow btn btn-form" disabled={!buttonEnabled}>
        Отправить сообщение
      </button>
      <div className="polit-descr contacts-btn">
        Нажимая кнопку &quot;Отправить сообщение&quot;, я подтверждаю, что
        ознакомлен и согласен с условиями &nbsp;
        <Link href="/policy" target="_blank" className="polit">
          политики обработки персональных данных
        </Link>
      </div>
    </form>
  );
}
