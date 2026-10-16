const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");
const status = document.getElementById("filter-status");
const total = cards.length;

document.getElementById("project-count").textContent = String(total);

function applyFilter(language) {
  let shown = 0;
  cards.forEach((card) => {
    const langs = card.dataset.langs.split(/\s+/);
    const match = language === "All" || langs.includes(language);
    card.hidden = !match;
    if (match) shown += 1;
  });

  chips.forEach((chip) => {
    const active = chip.dataset.filter === language;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", active ? "true" : "false");
  });

  status.textContent =
    language === "All"
      ? `Showing all ${shown} projects.`
      : `Showing ${shown} ${language} project${shown === 1 ? "" : "s"}.`;
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => applyFilter(chip.dataset.filter));
});

applyFilter("All");
