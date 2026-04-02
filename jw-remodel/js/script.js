async function loadHome() {
  const res = await fetch('content/home.json');
  const data = await res.json();

  document.getElementById('subtitle').textContent = data.subtitle;
  document.getElementById('cta').textContent = data.cta;
}

loadHome();