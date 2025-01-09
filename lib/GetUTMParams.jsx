"use client";
import { DetectOS, GetBrowser } from "@/services/getUserDevices";
import { useEffect, useState } from "react";
import { fetchIp } from "@/services/ip";
import { gmt } from "./gmt";
import useStore from "@/store";

export function GetUTMParams() {
  //const [getIp, setIp] = useState("");
  const { setUtmData } = useStore();
  /*
  useEffect(() => {
    fetchIp().then(setIp);
  }, []);*/
  /*
  const addUtmParams = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams({
      utm_source: urlParams.get("utm_source"),
      utm_source_type: urlParams.get("utm_source_type"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      utm_campaign_name: urlParams.get("utm_campaign_name"),
      utm_content: urlParams.get("utm_content"),
      utm_region_name: urlParams.get("utm_region_name"),
      utm_term: urlParams.get("utm_term"),
      utm_placement: urlParams.get("utm_placement"),
      utm_position: urlParams.get("utm_position"),
      utm_position_type: urlParams.get("utm_position_type"),
      utm_device: urlParams.get("utm_device"),
      yclid: urlParams.get("yclid"),
      platform: urlParams.get(DetectOS()),
      browser: urlParams.get(GetBrowser()),
      ip: ip,
      gmt: gmt,
    });

    if (!url.includes("?")) {
      return `${url}?${params.toString()}`;
    }
    return `${url}&${params.toString()}`;
  };
  /*
  const handleClick = (e) => {
    e.preventDefault();
    const link = e.target.href;
    const updatedLink = addUtmParams(link);
    window.location.href = updatedLink;
  };

  useEffect(() => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);
*/

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmSourceType = urlParams.get("utm_source_type");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");
      const utmCampaignName = urlParams.get("utm_campaign_name");
      const utmContent = urlParams.get("utm_content");
      const utmRegionName = urlParams.get("utm_region_name");
      const utmPlacement = urlParams.get("utm_placement");
      const utmPosition = urlParams.get("utm_position");
      const utmPositionType = urlParams.get("utm_position_type");
      const utmTerm = urlParams.get("utm_term");
      const utmDevice = urlParams.get("utm_device");
      const yclid = urlParams.get("yclid");
      /*   setUtmData({
        utmSource,
        utmSourceType,
        utmMedium,
        utmCampaign,
        utmCampaignName,
        utmPlacement,
        utmPosition,
        utmPositionType,
        utmContent,
        utmRegionName,
        utmTerm,
        utmDevice,
        yclid,
      });*/
      localStorage.setItem(
        "utm",
        JSON.stringify({
          utmSource,
          utmSourceType,
          utmMedium,
          utmCampaign,
          utmCampaignName,
          utmPlacement,
          utmPosition,
          utmPositionType,
          utmContent,
          utmRegionName,
          utmTerm,
          utmDevice,
          yclid,
        })
      );
    }
  }, []);

  return null;
}
