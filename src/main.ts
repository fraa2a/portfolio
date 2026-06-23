import './style.css'
import 'iconify-icon'

const themeButton = document.getElementById("toggle-theme");
const savedTheme = localStorage.getItem("theme");
const root: HTMLElement = document.documentElement;

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}


themeButton!.onclick = function() {
    
    if (root.dataset.theme == "dark") {
        root.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    } else {
        root.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
    }
}