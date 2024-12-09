export async function sendForm(json, type) {
  try {
    const result = await fetch("/api/sendform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (result.ok && type != "form") {
      alert("Форма отправлена");
    }

    if (!result.ok) {
      throw new Error(`Network response was not ok (${result.status})`);
    }
  } catch (error) {
    alert("Ошибка отправки формы");
  }
}
