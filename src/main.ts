const toggleNav = (e: MouseEvent) => {
  console.log(e)
};

const navToggleBtn: HTMLElement | null = document.getElementById("nav-toggle");

if (navToggleBtn != null) navToggleBtn.onclick = toggleNav;

export {};
