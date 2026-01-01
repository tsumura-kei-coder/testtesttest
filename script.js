const dateLabel = document.getElementById("today");

if (dateLabel) {
  const today = new Date();
  const formatted = today.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  dateLabel.textContent = formatted;
}
