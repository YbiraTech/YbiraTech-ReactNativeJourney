export function showDateNow() {
  const now = new Date();
  const dateNow = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
  });
  console.log(dateNow);
}
