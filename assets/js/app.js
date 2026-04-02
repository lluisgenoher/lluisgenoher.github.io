const btn = document.getElementById('themeBtn');
const body = document.body;

// Detectar preferencia del sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplicar tema guardado o usar preferencia del sistema
const saved = localStorage.getItem('theme');
if (saved) {
  body.classList.add(saved);
} else {
  body.classList.add(prefersDark ? 'dark' : 'light');
}

// Actualizar icono según tema activo
function updateBtn() {
  btn.textContent = body.classList.contains('dark') ? '☀' : '☾';
}

updateBtn();

btn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  body.classList.toggle('dark', !isDark);
  body.classList.toggle('light', isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  updateBtn();
});
