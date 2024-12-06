export const GetBrowser = () => {
  const browser = (regexp) => {
    return regexp.test(navigator.userAgent);
  };
  if (browser(/opr\//i) || !!window.opr) {
    return "Opera";
  } else if (browser(/edg/i)) {
    return "Microsoft Edge";
  } else if (browser(/chrome|chromium|crios/i)) {
    return "Google Chrome";
  } else if (browser(/firefox|fxios/i)) {
    return "Mozilla Firefox";
  } else if (browser(/safari/i)) {
    return "Apple Safari";
  } else if (browser(/trident/i)) {
    return "Microsoft Internet Explorer";
  } else if (browser(/ucbrowser/i)) {
    return "UC Browser";
  } else if (browser(/samsungbrowser/i)) {
    return "Samsung Browser";
  } else {
    return "Unknown browser";
  }
};

export const DetectOS = () => {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }
  return os;
};

export async function GetUserIp() {
  const ip = fetch("/api/ip");
  return ip;
}
