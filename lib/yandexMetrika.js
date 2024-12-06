"use client";

import React from "react";
import { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = 99046682;

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
