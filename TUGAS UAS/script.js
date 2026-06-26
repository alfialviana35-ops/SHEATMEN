const form = document.getElementById('contact-form');
const responseText = document.getElementById('form-response');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  responseText.textContent = 'Terima kasih! Pesan Anda sudah terkirim.';
  form.reset();
});
