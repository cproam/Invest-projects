export async function ProjectRender() {
  try {
    let response = await fetch("/api/records");
    let json = await response.json();
    return json;
  } catch (error) {
    return { error: "Ошибка загрузки карточек" };
  }
}
