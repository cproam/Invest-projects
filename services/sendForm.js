export function SendForm(json) {
  return new Promise((resolve, reject) => {
    fetch("/api/sendform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: json,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка отправки формы");
        }

        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
