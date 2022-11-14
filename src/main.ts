const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
};

const toggleNavBtn: HTMLElement | null = document.getElementById("nav-toggle");

if (toggleNavBtn != null) toggleNavBtn.onclick = toggleNav;

export {};
