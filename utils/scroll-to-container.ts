export function scrollToContainer(container: HTMLElement | null, offset = 0) {
  if (container) {
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = rect.top + scrollTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
