const btn = document.getElementById('themeBtn');
const body = document.body;

const saved = localStorage.getItem('theme');
if (saved) body.classList.add(saved);

btn.addEventListener('click', () => {
  const isLight = body.classList.contains('light');
  body.classList.toggle('light', !isLight);
  body.classList.toggle('dark', isLight);
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
  btn.textContent = isLight ? '☀' : '☾';
});
