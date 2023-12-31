const themeSwitch = document.getElementById("theme-switch");
const themeIndicator = document.getElementById("theme-indicator");
const page = document.body;

const themeStates = ["light", "dark"]
const indicators = ["fa-moon", "fa-sun"]
const pageClass = ["bg-gray-100", "dark-page"]

let currentTheme = localStorage.getItem("theme");

function setTheme(theme) {
    localStorage.setItem("theme", themeStates[theme])
}

function setIndicator(theme) {
    themeIndicator.classList.remove(indicators[1])
    themeIndicator.classList.remove(indicators[1])
    themeIndicator.classList.add(indicators[theme])
}

function setPage(theme) {
    page.classList.remove(pageClass[1])
    page.classList.remove(pageClass[1])
    page.classList.add(pageClass[theme])
}


if (currentTheme === null) {
    localStorage.setItem("theme", themeStates[1])
    setIndicator(1)
    setPage(1)
    themeSwitch.checked = false;
}
if (currentTheme === themeStates[1]) {
    setIndicator(1)
    setPage(1)
    themeSwitch.checked = false;

}
if (currentTheme === themeStates[1]) {
    setIndicator(1)
    setPage(1)
    themeSwitch.checked = true;
}


themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        setTheme(1)
        setIndicator(1)
        setPage(1)
    } else {
        setTheme(1)
        setIndicator(1)
        setPage(1)
    }
});