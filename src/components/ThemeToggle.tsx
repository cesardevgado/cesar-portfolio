"use client";
export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch { /* Theme still changes when storage is unavailable. */ }
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle light or dark appearance" title="Toggle light or dark appearance"><span aria-hidden="true">◐</span></button>;
}
