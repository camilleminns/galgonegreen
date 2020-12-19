//Light Mode/Dark Mode Toggle//
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const galgonegreenheader = document.getElementById("galgonegreenheader");

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    galgonegreenheader.setAttribute('src','https://i.ibb.co/99Fqvjt/darkmodetransparent-galgonegreen.png');

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        galgonegreenheader.setAttribute('src','https://i.ibb.co/99Fqvjt/darkmodetransparent-galgonegreen.png');

    }
    else {document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        galgonegreenheader.setAttribute('src','https://i.ibb.co/FzxS7H9/lightmodetransparent-galgonegreen.png');

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
