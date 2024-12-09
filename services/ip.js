export async function fetchIp() {
  try {
    let response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    let ip = data.ip;
    return ip;
  } catch (error) {
    console.error("Error:", error);
  }
}
