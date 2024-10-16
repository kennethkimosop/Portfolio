// Function to toggle dark/light mode
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
};

// Create a button for toggling themes
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = 'Toggle Dark Mode';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.top = '20px';
themeToggleBtn.style.right = '20px';
themeToggleBtn.style.padding = '10px';
themeToggleBtn.style.border = 'none';
themeToggleBtn.style.backgroundColor = '#4CAF50';
themeToggleBtn.style.color = 'white';
themeToggleBtn.style.cursor = 'pointer';
themeToggleBtn.onclick = toggleTheme;

// Append the button to the body
document.body.appendChild(themeToggleBtn);


