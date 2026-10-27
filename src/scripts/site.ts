const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header || document.body.classList.contains("has-solid-header")) return;

  const onScroll = () => {
    header.classList.toggle("is-solid", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  const closeButton = document.querySelector<HTMLButtonElement>("[data-menu-close]");
  if (!toggle || !menu || !closeButton) return;

  const focusable = () =>
    [...menu.querySelectorAll<HTMLElement>("a, button")].filter((node) => !node.hasAttribute("disabled"));

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    if (open) closeButton.focus();
    else toggle.focus();
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  closeButton.addEventListener("click", () => setOpen(false));
  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (menu.hidden) return;
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusable();
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initCarousels(): void {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>("[data-carousel-track]");
    const status = carousel.querySelector<HTMLElement>("[data-carousel-status]");
    const slides = track ? [...track.querySelectorAll<HTMLElement>("[data-slide]")] : [];
    if (!track || slides.length === 0) return;

    const update = () => {
      const left = track.scrollLeft;
      let index = 0;
      slides.forEach((slide, slideIndex) => {
        if (slide.offsetLeft - track.offsetLeft <= left + 24) index = slideIndex;
      });
      if (status) status.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    const move = (direction: number) => {
      const width = slides[0]?.getBoundingClientRect().width ?? track.clientWidth;
      track.scrollBy({
        left: (width + 16) * direction,
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    };

    carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => move(-1));
    carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => move(1));
    track.addEventListener("scroll", update, { passive: true });
    update();
  });
}

function initLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>("[data-lightbox]");
  const image = dialog?.querySelector<HTMLImageElement>("img");
  if (!dialog || !image) return;

  document.querySelectorAll<HTMLButtonElement>("[data-lightbox-open]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.src ?? "";
      image.alt = button.dataset.alt ?? "";
      image.width = Number(button.dataset.width ?? 1600);
      image.height = Number(button.dataset.height ?? 1066);
      dialog.showModal();
    });
  });

  dialog.querySelector("[data-lightbox-close]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    image.removeAttribute("src");
  });
}

function initLeadForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-lead-form]");
  const status = document.querySelector<HTMLElement>("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.dataset.email?.trim() ?? "";
    if (!email || !form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Họ tên: ${name}\nĐiện thoại: ${phone}\nNội dung: ${message}`;
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Đăng ký nhận thông tin One Era")}&body=${encodeURIComponent(body)}`;
    status.textContent = "Đã mở ứng dụng thư. Thông tin chỉ rời máy bạn khi bạn bấm gửi trong ứng dụng đó.";
  });
}

initHeader();
initMenu();
initCarousels();
initLightbox();
initLeadForm();
