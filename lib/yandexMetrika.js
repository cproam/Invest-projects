"use client";

import React from "react";
import { YMInitializer } from "react-yandex-metrika";
import { YM_ID } from "./tel";

const YM_COUNTER_ID = YM_ID;

const YandexMetrikaContainer = () => {
  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrikaContainer;
