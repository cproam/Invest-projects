"use client";
import { useEffect } from "react";

export function GetUTMParams() {
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
