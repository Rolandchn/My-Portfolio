
const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");
    
    // State
    const theme = localStorage.getItem('theme');

    // On mount (what happens when the page finished loading, first time, reloading)
    theme && document.body.classList.add(theme);

    // Handler
    const haddleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme', 'light-mode');
        }
        else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };

    // Events
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click', haddleThemeToggle)
    );
};

export default darkMode;