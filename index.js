console.log('Hello, world');

const html = document.documentElement; // select the html element
let currentTheme = 'boron'; // define a starting theme
const themes = ['boron', 'hydrogen']; // list the names of all themes

// add a click handler to the button
const button = document.getElementById('change-theme');
button.onclick = () => {
    // get the index of the next them
    const i = themes.findIndex(theme => theme === currentTheme) + 1;
    // set the next theme
    currentTheme = themes[i === themes.length ? 0 : i];
    // remove all theme-related class from the html element
    themes.forEach(theme => {
        html.classList.remove(theme);
    });
    // place the selected theme back on the html element
    html.classList.add(currentTheme);
};