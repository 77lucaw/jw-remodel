<<<<<<< HEAD
async function loadHome() {
  const res = await fetch('content/home.json');
  const data = await res.json();

  document.getElementById('subtitle').textContent = data.subtitle;
  document.getElementById('cta').textContent = data.cta;
}

=======
async function loadHome() {
  const res = await fetch('content/home.json');
  const data = await res.json();

  document.getElementById('subtitle').textContent = data.subtitle;
  document.getElementById('cta').textContent = data.cta;
}

>>>>>>> 09b0247f1e7b2d9ca6c7b158159c8e46a01ba191
loadHome();