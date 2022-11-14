const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
};

const toggleNavBtn: HTMLElement | null = document.getElementById("nav-toggle");

if (toggleNavBtn != null) toggleNavBtn.onclick = toggleNav;

const onKeyPress = (e: KeyboardEvent) => {
  if (e.key !== "Escape") return;
  document.body.dataset.nav = "false";
};

document.addEventListener("keyup", onKeyPress);

export {};
