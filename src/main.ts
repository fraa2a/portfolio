import './style.css'
import heroImg from './assets/hero.png'

const button = document.getElementById("toggle-theme");

button!.onclick = function() {
    const root: HTMLElement = document.documentElement;
    if (root.dataset.theme == "dark") {
        root.dataset.theme = "light";
    } else {
        root.dataset.theme = "dark";
    }
}