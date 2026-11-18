(() => {
  const getTab = target => target instanceof Element
    ? target.closest("[data-case-km-levels] .case-km-tab")
    : null;

  function select(tab) {
    if (tab.getAttribute("aria-selected") === "true") return;
    const console = tab.closest("[data-case-km-levels]");
    const panelId = tab.getAttribute("aria-controls");
    for (const candidate of console.querySelectorAll(".case-km-tab")) {
      const active = candidate === tab;
      candidate.setAttribute("aria-selected", String(active));
      candidate.tabIndex = active ? 0 : -1;
    }
    for (const panel of console.querySelectorAll(".case-km-panel")) {
      panel.hidden = panel.id !== panelId;
    }
  }

  document.addEventListener("pointerover", event => {
    const tab = getTab(event.target);
    if (tab && event.pointerType === "mouse") select(tab);
  });
  for (const type of ["focusin", "click"]) {
    document.addEventListener(type, event => {
      const tab = getTab(event.target);
      if (tab) select(tab);
    });
  }
  document.addEventListener("keydown", event => {
    const tab = getTab(event.target);
    if (!tab) return;
    const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
    const index = tabs.indexOf(tab);
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        tabs[(index + tabs.length - 1) % tabs.length].focus();
        break;
      case "ArrowDown":
      case "ArrowRight":
        tabs[(index + 1) % tabs.length].focus();
        break;
      case "Home": tabs[0].focus(); break;
      case "End": tabs[tabs.length - 1].focus(); break;
      default: return;
    }
    event.preventDefault();
  });
})();
