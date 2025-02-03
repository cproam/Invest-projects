"use client";

import React from "react";
import { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = process.env.YM_COUNTER_ID;

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
