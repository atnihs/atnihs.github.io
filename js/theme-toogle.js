;(function () {
    const toggleBtn = document.getElementById('theme-toggle')
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode')
        toggleBtn.textContent = '☀️'
    } else {
        toggleBtn.textContent = '🌙'
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        const isDark = document.body.classList.contains('dark-mode')
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
        toggleBtn.textContent = isDark ? '☀️' : '🌙'
    })
})()
